"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, LogOut, User as UserIcon, LayoutDashboard } from "lucide-react";
import AgentsMegaMenu from "@/components/site/AgentsMegaMenu";
import ProductMegaMenu from "@/components/site/ProductMegaMenu";
import SolutionsMegaMenu from "@/components/site/SolutionsMegaMenu";
import Logo from "@/components/site/Logo";
import { supabase } from "@/lib/supabase";
import { logout } from "@/lib/api";

export default function Navbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  useEffect(() => {
    // Check active session
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    }
    checkSession();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleConnectLinkedIn = async () => {
    setShowUserDropdown(false);
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) {
        window.location.href = "/login";
        return;
      }
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
      window.location.href = `${backendUrl}/linkedin/connect?token=${token}`;
    } catch (err) {
      console.error("LinkedIn connect error:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch {
      await supabase.auth.signOut();
      window.location.href = "/";
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-black/5 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center h-[72px] px-6 max-w-7xl mx-auto relative">
        <Link href="/" className="flex items-center hover:opacity-90 transition">
          <Logo className="text-[24px]" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavItem 
            label="Product" 
            hasDropdown 
            isActive={activeMegaMenu === 'Product'}
            onClick={() => setActiveMegaMenu(activeMegaMenu === 'Product' ? null : 'Product')}
            onMouseEnter={() => handleMouseEnter('Product')}
            onMouseLeave={handleMouseLeave}
          />
          <NavItem 
            label="Agents" 
            hasDropdown 
            isActive={activeMegaMenu === 'Agents'}
            onClick={() => setActiveMegaMenu(activeMegaMenu === 'Agents' ? null : 'Agents')}
            onMouseEnter={() => handleMouseEnter('Agents')}
            onMouseLeave={handleMouseLeave}
          />
          <NavItem 
            label="Solutions" 
            hasDropdown 
            isActive={activeMegaMenu === 'Solutions'}
            onClick={() => setActiveMegaMenu(activeMegaMenu === 'Solutions' ? null : 'Solutions')}
            onMouseEnter={() => handleMouseEnter('Solutions')}
            onMouseLeave={handleMouseLeave}
          />
          <NavItem label="Pricing" href="/pricing" />
          <NavItem label="Blog" href="/blog" />
        </div>

        {/* Dynamic Auth Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center gap-3 bg-black/[0.04] hover:bg-black/[0.08] border border-black/10 rounded-full px-4 py-2 transition-all shadow-2xs"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8763e5] to-[#d79de4] flex items-center justify-center text-white text-sm font-extrabold uppercase shadow-sm">
                  {user.email ? user.email.charAt(0) : "U"}
                </div>
                <span className="text-sm font-bold text-neutral-900 max-w-[160px] truncate hidden sm:inline-block">
                  {user.email ? user.email.split("@")[0] : "Account"}
                </span>
                <ChevronDown size={16} className="text-neutral-500" />
              </button>

              {/* User Dropdown Menu */}
              {showUserDropdown && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-neutral-200/90 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-3 mb-1 border-b border-neutral-100">
                    <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-bold">Signed in as</p>
                    <p className="text-sm font-bold text-neutral-900 truncate mt-0.5">{user.email}</p>
                  </div>
                  
                  <div className="space-y-1 py-1">
                    <Link
                      href="/generate"
                      onClick={() => setShowUserDropdown(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-800 hover:bg-neutral-100 rounded-2xl transition font-bold"
                    >
                      <LayoutDashboard size={18} className="text-[#8763e5]" />
                      Studio Dashboard
                    </Link>

                    <Link
                      href="/generate?tab=twitter"
                      onClick={() => {
                        setShowUserDropdown(false);
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("open-twitter-tab"));
                        }
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-800 hover:bg-neutral-100 rounded-2xl transition font-bold cursor-pointer"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#8763e5]/10 border border-[#8763e5]/30 flex items-center justify-center text-[#8763e5] text-xs font-black shrink-0">𝕏</span>
                      Twitter Settings
                    </Link>

                    <Link
                      href="/generate?tab=linkedin"
                      onClick={() => {
                        setShowUserDropdown(false);
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("open-linkedin-tab"));
                        }
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-800 hover:bg-neutral-100 rounded-2xl transition font-bold cursor-pointer"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5] text-xs font-black shrink-0">in</span>
                      LinkedIn Settings
                    </Link>
                  </div>

                  <div className="pt-1 mt-1 border-t border-neutral-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-2xl transition text-left font-bold"
                    >
                      <LogOut size={18} />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="text-[14px] text-gray-700 hover:text-black font-medium">
                Login
              </Link>
              <Link href="/signup" className="cir-btn !h-[42px] !px-5 !text-sm">
                Start free trial
                <svg
                  className="cir-btn__arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </Link>
            </>
          )}
        </div>

        <ProductMegaMenu 
          isOpen={activeMegaMenu === 'Product'} 
          onClose={() => setActiveMegaMenu(null)}
          onMouseEnter={() => handleMouseEnter('Product')}
          onMouseLeave={handleMouseLeave}
        />
        <AgentsMegaMenu 
          isOpen={activeMegaMenu === 'Agents'} 
          onMouseEnter={() => handleMouseEnter('Agents')}
          onMouseLeave={handleMouseLeave}
        />
        <SolutionsMegaMenu 
          isOpen={activeMegaMenu === 'Solutions'} 
          onClose={() => setActiveMegaMenu(null)}
          onMouseEnter={() => handleMouseEnter('Solutions')}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </nav>
  );
}

function NavItem({ 
  label, 
  hasDropdown, 
  isActive, 
  onClick,
  onMouseEnter,
  onMouseLeave,
  href 
}: { 
  label: string; 
  hasDropdown?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  href?: string;
}) {
  if (href) {
    return (
      <Link href={href} className={`flex items-center gap-1 text-[15px] font-medium text-black/70 transition hover:text-black`}>
        {label}
      </Link>
    );
  }
  return (
    <div 
      className="relative py-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button 
        onClick={onClick}
        className={`flex items-center gap-1 text-[15px] font-medium transition ${isActive ? 'text-[#8763e5]' : 'text-black/70 hover:text-black'}`}
      >
        {label}
        {hasDropdown && <ChevronDown size={14} className={isActive ? 'text-[#8763e5]/70' : 'text-black/40'} />}
      </button>
    </div>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RotateCw, LogOut, ArrowUpRight, Library } from "lucide-react";
import { logout } from "@/lib/api";
import LightRays from "@/components/LightRays";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/site/Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = ["/", "/login", "/agents", "/signup", "/about", "/documentation", "/api-pricing", "/integrations", "/champions", "/contact", "/brand", "/brand-guidelines", "/trust-center", "/terms-of-service", "/terms", "/privacy-policy", "/privacy", "/eula", "/end-user-agreement"].includes(pathname || "");
  const [user, setUser] = useState<any>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Auth check & listeners
  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }
    }
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Landing and login pages manage their own nav — render children directly to avoid
  // any wrapper that could break position:sticky or add unwanted headers.
  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <div className="app-shell bg-[#f9f9fb]" style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>

      <Navbar />

      <div style={{ position: "relative", paddingTop: 72 }}>
        {children}
      </div>
    </div>
  );
}

"use client";

export default function SereneNavbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center px-6 md:px-12 py-8">
      {/* Left: Circle Logo & ContentForge Brand Name */}
      <div className="flex items-center gap-4">
        <img
          src="/profile.png"
          alt="ContentForge Logo"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-white/20 shadow-xl flex-shrink-0 bg-black"
        />
        <span className="font-sans font-bold text-white text-2xl md:text-4xl tracking-tight">
          ContentForge
        </span>
      </div>
    </nav>
  );
}

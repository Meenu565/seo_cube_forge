export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="/cubeforgelabs_logo_main.png" 
      alt="CubeForgeLabs Logo" 
      width={140}
      height={32}
      decoding="async"
      className={`h-[1.2em] w-auto object-contain ${className}`} 
    />
  );
}

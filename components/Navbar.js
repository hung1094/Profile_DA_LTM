import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-[95%] max-w-7xl">
      <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl md:rounded-full shadow-[0_8px_32px_rgba(0,162,255,0.1)] px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
              <span className="text-xl font-black text-white">B</span>
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-sky-800 to-sky-950 bg-clip-text text-transparent truncate max-w-[150px] md:max-w-none">
              Blog Lập Trình
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <Link key={item.name} href={item.href} className="group relative px-5 py-2">
                  <span className={`relative z-10 text-sm font-semibold transition-colors ${
                    isActive ? 'text-sky-900' : 'text-sky-700 group-hover:text-sky-900'
                  }`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/60 shadow-sm border border-white/20" />
                  )}
                  {!isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-sky-400 transition-all group-hover:w-1/2" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-sky-800">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-white/20 pt-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-xl ${
                  router.pathname === item.href ? 'bg-sky-500 text-white' : 'text-sky-800 hover:bg-sky-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
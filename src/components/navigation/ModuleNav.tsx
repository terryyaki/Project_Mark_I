'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ModuleNav() {
  const pathname = usePathname();

  const links = [
    { href: '/spaces', label: 'Spaces' },
    { href: '/social', label: 'Social' }
  ];

  return (
    <nav>
      {links.map((link) => (
        <Link 
          key={link.href}
          href={link.href}
          className={`px-4 py-2 rounded-lg transition-all ${
            pathname.startsWith(link.href) 
              ? 'bg-white/10 text-white shadow-lg shadow-white/10' 
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          {link.label}
        </Link>
      ))}
      <Link 
        href="/profile" 
        className="flex items-center p-2 hover:bg-white/10 rounded-lg"
      >
        <svg 
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
        Profile
      </Link>
    </nav>
  );
}
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
    <div className="flex gap-4">
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
    </div>
  );
}
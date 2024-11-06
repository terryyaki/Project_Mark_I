'use client';

import Dock from '@/components/dock/Dock';

export default function SpacesOS() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#2C3E50] via-[#3498DB] to-[#2980B9]">
      {/* Area for widgets */}
      <div className="relative h-full w-full">
      </div>
      
      <Dock />
    </div>
  );
}
'use client';

import { cn } from '@/lib/utils';

interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (value: string) => void;
}

export function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Model tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={active === tab}
          onClick={() => onChange(tab)}
          className={cn(
            'rounded-lg border px-3 py-1.5 text-sm transition',
            active === tab
              ? 'border-accent bg-accent/15 text-foreground'
              : 'border-border text-muted hover:text-foreground',
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

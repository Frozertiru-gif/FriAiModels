'use client';

import { useState } from 'react';
import { Tabs } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import type { Model } from '@/lib/types';
import { formatCurrency, formatNumber } from '@/lib/utils';

const items = ['Overview', 'Content', 'Schedule', 'Analytics'];

export function ModelDetailTabs({ model }: { model: Model }) {
  const [active, setActive] = useState('Overview');

  return (
    <div className="space-y-4">
      <Tabs tabs={items} active={active} onChange={setActive} />
      <Card>
        {active === 'Overview' && (
          <p className="text-sm text-muted">{model.name} has {formatNumber(model.followers)} followers and estimated {formatCurrency(model.monthlyRevenue)} monthly revenue.</p>
        )}
        {active === 'Content' && <p className="text-sm text-muted">Content library placeholder with generated assets and caption drafts.</p>}
        {active === 'Schedule' && <p className="text-sm text-muted">Schedule board placeholder with queue, slots and publishing status.</p>}
        {active === 'Analytics' && <p className="text-sm text-muted">Analytics panel placeholder with retention and conversion trends.</p>}
      </Card>
    </div>
  );
}

'use client';

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useFavorites';

export function FavoriteToggleButton({ modelId }: { modelId: string }) {
  const { isFavorite, toggle } = useFavorites();
  const active = isFavorite(modelId);

  return (
    <Button variant={active ? 'primary' : 'secondary'} className="gap-2" onClick={() => toggle(modelId)}>
      <Heart className={`size-4 ${active ? 'fill-current' : ''}`} />
      {active ? 'Убрать из избранного' : 'В избранное'}
    </Button>
  );
}

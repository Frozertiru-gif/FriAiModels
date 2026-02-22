'use client';

import { useCallback, useEffect, useState } from 'react';
import { FAVORITES_STORAGE_KEY, getFavorites, toggleFavorite } from '@/lib/favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setFavorites(getFavorites());
    setIsReady(true);
  }, []);

  useEffect(() => {
    const syncFavorites = (event: StorageEvent) => {
      if (event.key && event.key !== FAVORITES_STORAGE_KEY) {
        return;
      }

      setFavorites(getFavorites());
    };

    window.addEventListener('storage', syncFavorites);
    return () => window.removeEventListener('storage', syncFavorites);
  }, []);

  const toggle = useCallback((id: string) => {
    const next = toggleFavorite(id);
    setFavorites(next);
    return next;
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      if (!isReady) {
        return false;
      }
      return favorites.includes(id);
    },
    [favorites, isReady],
  );

  return {
    favorites,
    isReady,
    isFavorite,
    toggle,
  };
}

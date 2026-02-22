const FAVORITES_STORAGE_KEY = 'fryai:favorites';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getFavorites(): string[] {
  if (!canUseStorage()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return [...new Set(parsed.filter((item): item is string => typeof item === 'string'))];
  } catch {
    return [];
  }
}

function saveFavorites(next: string[]) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id);
}

export function toggleFavorite(id: string): string[] {
  const current = getFavorites();
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
  saveFavorites(next);
  return next;
}

export { FAVORITES_STORAGE_KEY };

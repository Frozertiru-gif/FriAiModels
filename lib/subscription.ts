import { type PlanId } from '@/lib/plans';

const STORAGE_KEY = 'fryai:subscription';
const TRIAL_DURATION_DAYS = 7;

export type SubscriptionState = {
  planId: 'trial' | 'pro' | 'elite' | 'free';
  trialStartedAt?: string;
  trialEndsAt?: string;
};

const defaultState: SubscriptionState = {
  planId: 'free',
};

function readState(): SubscriptionState | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as SubscriptionState;
  } catch {
    return null;
  }
}

function persistState(state: SubscriptionState) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getSubscription(): SubscriptionState {
  return readState() ?? defaultState;
}

export function initTrialIfMissing(): SubscriptionState {
  const existing = readState();
  if (existing) {
    return existing;
  }

  const now = new Date();
  const trialEnds = new Date(now.getTime() + TRIAL_DURATION_DAYS * 24 * 60 * 60 * 1000);

  const trialState: SubscriptionState = {
    planId: 'trial',
    trialStartedAt: now.toISOString(),
    trialEndsAt: trialEnds.toISOString(),
  };

  persistState(trialState);
  return trialState;
}

export function isTrialActive(state: SubscriptionState) {
  if (state.planId !== 'trial' || !state.trialEndsAt) {
    return false;
  }

  return new Date(state.trialEndsAt).getTime() > Date.now();
}

export function getEffectivePlan(state: SubscriptionState): PlanId {
  if (state.planId === 'trial') {
    return isTrialActive(state) ? 'trial' : 'free';
  }

  return state.planId;
}

export function getTrialDaysLeft(state: SubscriptionState) {
  if (!state.trialEndsAt || state.planId !== 'trial') {
    return 0;
  }

  const diff = new Date(state.trialEndsAt).getTime() - Date.now();
  if (diff <= 0) {
    return 0;
  }

  return Math.ceil(diff / (24 * 60 * 60 * 1000));
}

export function setPlan(planId: SubscriptionState['planId']) {
  const current = getSubscription();
  const next: SubscriptionState = {
    ...current,
    planId,
  };

  if (planId !== 'trial') {
    delete next.trialEndsAt;
    delete next.trialStartedAt;
  }

  persistState(next);
  return next;
}

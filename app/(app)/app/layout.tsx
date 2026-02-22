import { redirect } from 'next/navigation';
import { AppShell } from '@/components/layout/app-shell';
import { mockSession } from '@/lib/mock/auth';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  if (!mockSession.isAuthed) {
    redirect('/');
  }

  return <AppShell>{children}</AppShell>;
}

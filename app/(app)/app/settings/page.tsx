import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
  return (
    <div className="space-y-3 sm:space-y-5">
      <Card className="border-white/[0.08] p-4 sm:p-5">
        <p className="text-xs uppercase tracking-wide text-muted">Profile</p>
        <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-background/50 p-3">
          <div className="flex size-12 items-center justify-center rounded-full border border-white/[0.12] bg-accent/15 text-sm font-semibold">FM</div>
          <div>
            <p className="font-medium text-foreground">Fri Models</p>
            <p className="text-sm text-white/60">you@example.com</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <label className="space-y-1.5">
            <span className="text-xs font-medium uppercase tracking-wide text-white/70">Имя</span>
            <Input placeholder="Ваше имя" aria-label="Name" className="h-11" />
          </label>
          <label className="space-y-1.5">
            <span className="text-xs font-medium uppercase tracking-wide text-white/70">Email</span>
            <Input placeholder="you@example.com" aria-label="Email" className="h-11" />
          </label>
        </div>
      </Card>
      <Card className="border-white/[0.08] p-4 sm:p-5">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="mt-2 text-sm text-white/60">Настройки уведомлений станут доступны после подключения рабочих интеграций.</p>
      </Card>
      <Card className="border-white/[0.08] p-4 sm:p-5">
        <h2 className="text-lg font-semibold">API key</h2>
        <p className="mt-2 text-sm text-white/60">Раздел API появится позже. Сейчас ключи недоступны.</p>
        <div className="mt-4 flex items-center gap-3">
          <Button variant="secondary" disabled>
            Generate key
          </Button>
          <span className="rounded-full border border-white/[0.12] bg-background/60 px-3 py-1 text-xs uppercase tracking-wide text-muted">Скоро</span>
        </div>
      </Card>
    </div>
  );
}

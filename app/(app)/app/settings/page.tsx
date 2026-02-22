import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-xl font-semibold">Profile</h1>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Input placeholder="Ваше имя" aria-label="Name" />
          <Input placeholder="you@example.com" aria-label="Email" />
        </div>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="mt-2 text-sm text-muted">Настройки уведомлений станут доступны после подключения рабочих интеграций.</p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">API key</h2>
        <p className="mt-2 text-sm text-muted">Раздел API появится позже. Сейчас ключи недоступны.</p>
        <Button variant="secondary" className="mt-4" disabled>Generate key</Button>
      </Card>
    </div>
  );
}

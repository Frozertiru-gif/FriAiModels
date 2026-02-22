import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-xl font-semibold">Profile</h1>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Input defaultValue="Operations Manager" aria-label="Name" />
          <Input defaultValue="ops@friaimodels.com" aria-label="Email" />
        </div>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="mt-2 text-sm text-muted">Email summaries: enabled. Failure alerts: enabled.</p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">API key</h2>
        <p className="mt-2 text-sm text-muted">API access placeholder for future backend integration.</p>
        <Button variant="secondary" className="mt-4">Generate key</Button>
      </Card>
    </div>
  );
}

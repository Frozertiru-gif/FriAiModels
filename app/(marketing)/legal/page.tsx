import { Card } from '@/components/ui/card';

export default function LegalPage() {
  return (
    <section className="section-container space-y-4 py-16">
      <h1 className="section-title">Legal</h1>
      <Card>
        <h2 className="text-lg font-semibold">Terms of Service</h2>
        <p className="mt-2 text-sm text-muted">Placeholder terms. Add production legal text before launch.</p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Privacy Policy</h2>
        <p className="mt-2 text-sm text-muted">Placeholder privacy details. Define data processing and retention policy.</p>
      </Card>
    </section>
  );
}

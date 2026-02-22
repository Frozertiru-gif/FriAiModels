import { Card } from '@/components/ui/card';
import { analyticsSnapshots } from '@/lib/mock/analytics';
import { formatCurrency, formatNumber } from '@/lib/utils';

export default function AnalyticsPage() {
  return (
    <Card>
      <h1 className="text-xl font-semibold">Analytics</h1>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted">
              <th className="pb-2">Date</th>
              <th className="pb-2">Impressions</th>
              <th className="pb-2">Engagement</th>
              <th className="pb-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {analyticsSnapshots.map((row) => (
              <tr key={row.date} className="border-t border-border">
                <td className="py-2">{new Date(row.date).toLocaleDateString('en-US')}</td>
                <td className="py-2">{formatNumber(row.impressions)}</td>
                <td className="py-2">{row.engagementRate.toFixed(2)}%</td>
                <td className="py-2">{formatCurrency(row.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

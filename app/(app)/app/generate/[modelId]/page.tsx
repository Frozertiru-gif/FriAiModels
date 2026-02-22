import { redirect } from 'next/navigation';

export default function LegacyGenerateWithModelPage({ params }: { params: { modelId: string } }) {
  redirect(`/app/models/${params.modelId}/generate`);
}

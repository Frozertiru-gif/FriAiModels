import type { GenerationJob } from '@/lib/types';

const statuses: GenerationJob['status'][] = ['completed', 'completed', 'running', 'queued', 'failed'];
const types: GenerationJob['outputType'][] = ['image', 'short_video', 'caption_set'];

export const generationJobs: GenerationJob[] = Array.from({ length: 15 }).map((_, index) => ({
  id: `job-${index + 1}`,
  modelId: ['nova', 'aiko', 'lena', 'iris', 'miko'][index % 5],
  prompt: `Campaign variation #${index + 1} with premium brand style and dynamic pacing`,
  status: statuses[index % statuses.length],
  createdAt: new Date(Date.now() - index * 1000 * 60 * 48).toISOString(),
  outputType: types[index % types.length],
}));

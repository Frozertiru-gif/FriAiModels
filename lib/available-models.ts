export type PriceTier = 'Standard' | 'Pro' | 'Elite';

export type AvailableGirl = {
  id: string;
  displayName: string;
  ageBadge: '18+';
  city?: string;
  languages: string[];
  niche: 'Fitness' | 'Cosplay' | 'Luxury' | 'Girl-next-door' | 'Alt' | 'Business' | 'Travel';
  vibe: string;
  bio: string;
  tags: string[];
  priceTier: PriceTier;
  previewImages: [string, string, string];
  capabilities: string[];
};

export const AVAILABLE_GIRLS: AvailableGirl[] = [
  {
    id: 'alina-velvet',
    displayName: 'Alina Velvet',
    ageBadge: '18+',
    city: 'Dubai',
    languages: ['RU', 'EN'],
    niche: 'Luxury',
    vibe: 'Элегантная эстетика, премиальный lifestyle и спокойная уверенность в кадре.',
    bio: 'Виртуальная модель (18+) с акцентом на fashion и дорогой визуальный стиль. Подходит для брендов, которым важны чистая композиция, свет и имиджевый тон. Работает в формате длинных серий и сезонных кампаний.',
    tags: ['luxury', 'fashion', 'editorial', 'glamour', 'hotel', 'city lights', 'premium'],
    priceTier: 'Elite',
    previewImages: ['from-violet-500/60 via-fuchsia-500/60 to-slate-900', 'from-zinc-800 via-indigo-700/70 to-fuchsia-500/50', 'from-fuchsia-600/60 via-purple-600/60 to-zinc-900'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии', 'Озвучка'],
  },
  {
    id: 'mira-flare',
    displayName: 'Mira Flare',
    ageBadge: '18+',
    city: 'Barcelona',
    languages: ['EN', 'ES', 'RU'],
    niche: 'Travel',
    vibe: 'Солнечная динамика, лёгкий тон и контент про маршруты, отели и приключения.',
    bio: 'Виртуальная модель (18+) для travel-контента и lifestyle-брендов. Сильна в сценариях для коротких роликов и визуальных подборках с городской атмосферой. Подходит для постоянной рубрикации в соцсетях.',
    tags: ['travel', 'lifestyle', 'city guide', 'vlog style', 'sunset', 'adventure', 'reels'],
    priceTier: 'Pro',
    previewImages: ['from-amber-400/70 via-orange-500/70 to-rose-500/70', 'from-cyan-500/60 via-sky-500/60 to-indigo-700/60', 'from-orange-500/60 via-pink-500/50 to-purple-600/60'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии'],
  },
  {
    id: 'eva-korr',
    displayName: 'Eva Korr',
    ageBadge: '18+',
    city: 'Berlin',
    languages: ['EN', 'DE'],
    niche: 'Alt',
    vibe: 'Графичный, смелый и слегка индустриальный вайб для выразительного брендинга.',
    bio: 'Виртуальная модель (18+) в альтернативной стилистике без провокационного контента. Помогает собирать цельный визуальный образ для музыкальных, fashion и streetwear-проектов. Подходит для экспериментальных креативов.',
    tags: ['alt', 'streetwear', 'neon', 'editorial', 'night city', 'bold style', 'moody'],
    priceTier: 'Pro',
    previewImages: ['from-zinc-900 via-purple-800/70 to-pink-600/60', 'from-slate-900 via-fuchsia-700/60 to-indigo-600/70', 'from-purple-900/70 via-rose-700/60 to-zinc-950'],
    capabilities: ['Фото-сеты', 'Reels', 'Сценарии', 'Озвучка'],
  },
  {
    id: 'rina-sport',
    displayName: 'Rina Sport',
    ageBadge: '18+',
    city: 'Warsaw',
    languages: ['RU', 'EN', 'PL'],
    niche: 'Fitness',
    vibe: 'Энергичный контент про тренировки, рутину и дисциплину без токсичной мотивации.',
    bio: 'Виртуальная модель (18+) для fitness-проектов и healthy lifestyle. Отлично работает с форматами «день из жизни», короткими тренировочными сценариями и продуктовой интеграцией. Делает контент последовательным и регулярным.',
    tags: ['fitness', 'wellness', 'routine', 'gym', 'motivation', 'healthy', 'stories'],
    priceTier: 'Standard',
    previewImages: ['from-emerald-400/70 via-lime-400/60 to-slate-900', 'from-teal-500/60 via-emerald-500/60 to-cyan-600/60', 'from-lime-500/60 via-green-500/60 to-emerald-700/70'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии'],
  },
  {
    id: 'sofia-nextdoor',
    displayName: 'Sofia Next',
    ageBadge: '18+',
    city: 'Prague',
    languages: ['RU', 'EN', 'CZ'],
    niche: 'Girl-next-door',
    vibe: 'Тёплый и дружелюбный образ для повседневных lifestyle-историй.',
    bio: 'Виртуальная модель (18+) с мягким, естественным тоном коммуникации. Хорошо подходит для брендов с акцентом на близость к аудитории и «человечный» контент. Эффективна для сериальных stories и UGC-форматов.',
    tags: ['girl-next-door', 'daily life', 'cozy', 'ugc style', 'glamour', 'soft light', 'community'],
    priceTier: 'Standard',
    previewImages: ['from-rose-300/70 via-pink-400/70 to-violet-500/60', 'from-amber-200/70 via-rose-300/70 to-fuchsia-400/60', 'from-pink-300/70 via-purple-400/60 to-indigo-500/60'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии'],
  },
  {
    id: 'nova-cos',
    displayName: 'Nova Cos',
    ageBadge: '18+',
    city: 'Tokyo',
    languages: ['EN', 'JP'],
    niche: 'Cosplay',
    vibe: 'Яркий character-driven контент, стилизации и тематические релизы.',
    bio: 'Виртуальная модель (18+) для косплей и pop-culture направлений. Поддерживает запуск сезонных образов и тематических коллекций без использования реальных фото. Даёт стабильный визуальный стиль для фандом-комьюнити.',
    tags: ['cosplay', 'anime style', 'character', 'studio set', 'color pop', 'lingerie (18+)', 'campaign'],
    priceTier: 'Elite',
    previewImages: ['from-cyan-400/70 via-blue-500/70 to-violet-600/70', 'from-violet-500/70 via-pink-500/70 to-orange-400/70', 'from-sky-500/70 via-indigo-500/70 to-fuchsia-500/70'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии', 'Озвучка'],
  },
  {
    id: 'katya-board',
    displayName: 'Katya Board',
    ageBadge: '18+',
    city: 'London',
    languages: ['EN', 'RU'],
    niche: 'Business',
    vibe: 'Деловой, чистый и структурный стиль для экспертного личного бренда.',
    bio: 'Виртуальная модель (18+) в business-направлении для образовательного и B2B контента. Хорошо раскрывает темы продуктивности, карьеры и экспертных рубрик. Подходит для видео-серий и визуальных шаблонов.',
    tags: ['business', 'expert', 'minimal', 'presentation', 'career', 'professional', 'linkedin style'],
    priceTier: 'Pro',
    previewImages: ['from-slate-400/70 via-zinc-500/70 to-slate-800/70', 'from-indigo-400/60 via-slate-500/60 to-zinc-800/70', 'from-slate-300/70 via-gray-500/70 to-slate-900/70'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии', 'Озвучка'],
  },
  {
    id: 'luna-boudoir',
    displayName: 'Luna Boudoir',
    ageBadge: '18+',
    city: 'Milan',
    languages: ['IT', 'EN', 'RU'],
    niche: 'Luxury',
    vibe: 'Мягкий свет, камерность и fashion-подача в нейтральной эстетике.',
    bio: 'Виртуальная модель (18+) для брендов, которым нужен аккуратный glamour-контент без откровенных описаний. Сильна в moodboard-подходе, стилизациях и коротких сценариях под визуальные серии. Оптимальна для премиального имиджа.',
    tags: ['boudoir (18+)', 'glamour', 'lingerie (18+)', 'soft light', 'editorial', 'fashion', 'premium'],
    priceTier: 'Elite',
    previewImages: ['from-rose-400/70 via-fuchsia-400/60 to-zinc-900/80', 'from-purple-500/60 via-rose-400/60 to-amber-300/60', 'from-fuchsia-500/60 via-pink-500/60 to-slate-900/80'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии'],
  },
  {
    id: 'maya-route',
    displayName: 'Maya Route',
    ageBadge: '18+',
    city: 'Lisbon',
    languages: ['EN', 'PT', 'RU'],
    niche: 'Travel',
    vibe: 'Спокойный outdoor и coastal-настрой с фокусом на атмосферу и детали.',
    bio: 'Виртуальная модель (18+) для туризма, hospitality и брендов отдыха. Умеет поддерживать единый стиль от stories до длинных серий рилсов. Добавляет визуальную цельность и понятный tone of voice.',
    tags: ['coastal', 'travel', 'slow living', 'resort', 'sunrise', 'storytelling', 'lifestyle'],
    priceTier: 'Standard',
    previewImages: ['from-cyan-300/70 via-sky-400/60 to-blue-700/70', 'from-emerald-300/60 via-cyan-400/60 to-sky-600/70', 'from-blue-300/60 via-cyan-400/60 to-teal-600/70'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии'],
  },
  {
    id: 'zara-iron',
    displayName: 'Zara Iron',
    ageBadge: '18+',
    city: 'New York',
    languages: ['EN'],
    niche: 'Fitness',
    vibe: 'Сильный и современный urban-fit образ с акцентом на результат и стиль.',
    bio: 'Виртуальная модель (18+) для sport-fashion и брендов активного образа жизни. Поддерживает кампании с чёткой визуальной дисциплиной и коротким динамичным сторителлингом. Подходит для масштабируемых контент-планов.',
    tags: ['fitness', 'urban', 'sport style', 'reels', 'discipline', 'performance', 'glamour'],
    priceTier: 'Pro',
    previewImages: ['from-red-500/70 via-orange-500/70 to-zinc-900/80', 'from-orange-500/60 via-amber-400/60 to-slate-800/80', 'from-rose-500/60 via-red-500/60 to-zinc-900/80'],
    capabilities: ['Фото-сеты', 'Stories', 'Reels', 'Сценарии', 'Озвучка'],
  },
];

export function getAvailableModelById(modelId: string) {
  return AVAILABLE_GIRLS.find((model) => model.id === modelId);
}

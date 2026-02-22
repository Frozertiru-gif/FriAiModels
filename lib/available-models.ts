export type AvailableModel = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Video' | 'Image' | 'Text' | 'Audio' | 'Audio/Text' | 'Text/Video';
  badges: string[];
  difficulty: 'Easy' | 'Pro';
  eta: string;
  capabilities: [string, string, string];
};

export const AVAILABLE_MODELS: AvailableModel[] = [
  {
    id: 'shorts-autocut',
    title: 'Shorts AutoCut',
    tagline: 'Быстрая нарезка вертикальных клипов под удержание.',
    description:
      'Собирает короткие ролики из длинного материала, добавляет динамичные субтитры и завершает клип сильным CTA под формат Shorts/Reels.',
    category: 'Video',
    badges: ['Fast', 'HD', 'Pro'],
    difficulty: 'Easy',
    eta: '~2 мин',
    capabilities: ['Автонарезка по пикам внимания', 'Субтитры и выделение ключевых фраз', 'Финальный hook + CTA'],
  },
  {
    id: 'tiktok-trend-writer',
    title: 'TikTok Trend Writer',
    tagline: 'Сценарии под тренды и актуальные форматы TikTok.',
    description:
      'Генерирует цепляющие скрипты и структуру короткого видео с учётом трендовых механик, интро и ритма платформы.',
    category: 'Text',
    badges: ['Trends', 'Fast'],
    difficulty: 'Easy',
    eta: '~1 мин',
    capabilities: ['Сценарии под трендовый угол', 'Варианты hooks для A/B', 'Рекомендованный темп подачи'],
  },
  {
    id: 'youtube-longform-planner',
    title: 'YouTube Longform Planner',
    tagline: 'Планирование длинных выпусков с логичной драматургией.',
    description:
      'Подготавливает структуру longform-видео: блоки, таймкоды и опорные тезисы, чтобы удерживать внимание на протяжении всего ролика.',
    category: 'Text/Video',
    badges: ['Strategic', 'Creator'],
    difficulty: 'Pro',
    eta: '~4 мин',
    capabilities: ['Помесячный контент-план', 'Сценарный каркас с таймкодами', 'Темы для серийного формата'],
  },
  {
    id: 'voiceover-studio',
    title: 'Voiceover Studio',
    tagline: 'Озвучка с управлением интонациями и тембром.',
    description:
      'Создаёт голосовые дорожки с подбором стиля речи для рекламы, обучающих видео и продуктовых демо.',
    category: 'Audio',
    badges: ['Studio', 'Natural'],
    difficulty: 'Easy',
    eta: '~3 мин',
    capabilities: ['Тональность под формат контента', 'Паузы и акценты в ключевых местах', 'Экспорт под соцсети и подкасты'],
  },
  {
    id: 'thumbnail-forge',
    title: 'Thumbnail Forge',
    tagline: 'Яркие превью и титры для видео с высоким CTR.',
    description:
      'Генерирует концепции обложек, варианты композиции и текстовые акценты, подходящие под нишу и целевую аудиторию.',
    category: 'Image',
    badges: ['CTR', 'HD', 'Design'],
    difficulty: 'Pro',
    eta: '~2 мин',
    capabilities: ['3 концепции обложек на выбор', 'Титры и цветовые акценты', 'Рекомендации по визуальному фокусу'],
  },
  {
    id: 'product-promo-generator',
    title: 'Product Promo Generator',
    tagline: 'Промо-ролики для карточек товаров и соцсетей.',
    description:
      'Собирает короткие продающие видео с упором на преимущества продукта, оффер и финальный призыв к действию.',
    category: 'Video',
    badges: ['Sales', 'Fast'],
    difficulty: 'Easy',
    eta: '~3 мин',
    capabilities: ['Сценарий под оффер и боль клиента', 'Структура ролика под performance', 'Вариации под разные площадки'],
  },
  {
    id: 'reels-caption-pro',
    title: 'Reels Caption Pro',
    tagline: 'Подписи и хэштеги для Reels с фокусом на охваты.',
    description:
      'Создаёт набор caption-вариантов разного тона, подбирает релевантные хэштеги и усиливает вовлечение за счёт CTA.',
    category: 'Text',
    badges: ['SMM', 'Fast'],
    difficulty: 'Easy',
    eta: '~1 мин',
    capabilities: ['Несколько стилей подписи', 'Хэштеги по теме и нише', 'CTA для комментариев и сохранений'],
  },
  {
    id: 'podcast-repurposer',
    title: 'Podcast Repurposer',
    tagline: 'Переупаковка подкаста в клипы и короткие тезисы.',
    description:
      'Выделяет ключевые мысли из длинного аудио, формирует клипы для соцсетей и короткие summary для публикаций.',
    category: 'Audio/Text',
    badges: ['Repurpose', 'Multi'],
    difficulty: 'Pro',
    eta: '~5 мин',
    capabilities: ['Выжимка главных инсайтов', 'Клипы с потенциальным virality', 'Текстовые summary для постов'],
  },
  {
    id: 'brand-kit-assistant',
    title: 'Brand Kit Assistant',
    tagline: 'Tone of voice и базовый контент-гайд бренда.',
    description:
      'Помогает оформить стиль коммуникации бренда: тон, запрещённые формулировки и правила подачи ключевых сообщений.',
    category: 'Text',
    badges: ['Brand', 'Guidelines'],
    difficulty: 'Pro',
    eta: '~4 мин',
    capabilities: ['Tone of voice с примерами', 'Словарь бренда и стоп-слова', 'Рекомендации по стилю публикаций'],
  },
  {
    id: 'ad-copy-sprint',
    title: 'Ad Copy Sprint',
    tagline: 'Короткие рекламные тексты под быстрые гипотезы.',
    description:
      'Генерирует пачку лаконичных рекламных сообщений для тестов в performance-кампаниях и быстрых A/B запусков.',
    category: 'Text',
    badges: ['Ads', 'Performance', 'Fast'],
    difficulty: 'Easy',
    eta: '~1 мин',
    capabilities: ['Пакет коротких офферов', 'Варианты под разные сегменты', 'Формулировки для A/B тестов'],
  },
];

export function getAvailableModelById(modelId: string) {
  return AVAILABLE_MODELS.find((model) => model.id === modelId);
}

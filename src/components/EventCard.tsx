import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';
import { eventTranslations } from '../data/eventTranslations';

export default function EventCard() {
  const { currentEvent } = useGameStore();
  const { language, t } = useLanguage();

  if (!currentEvent) {
    return (
      <div className="bg-white border-4 border-black p-4">
        <div className="text-xs text-center text-gray-500">{t('loading')}</div>
      </div>
    );
  }

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'basic':
        return t('basicEvent');
      case 'onchain':
        return t('onchainEvent');
      case 'kol':
        return t('kolEvent');
      default:
        return t('basicEvent');
    }
  };

  // 获取当前语言的事件文本
  const eventText = eventTranslations[currentEvent.id];
  const title = eventText ? eventText.title[language] : currentEvent.title;
  const description = eventText ? eventText.description[language] : currentEvent.description;

  return (
    <div
      className="border-4 border-black p-4 space-y-3 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/market-bg.jpg)' }}
    >
      {/* 半透明遮罩确保文字可读 */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 bg-gray-200 bg-opacity-80 text-xs">
            {getEventTypeLabel(currentEvent.type)}
          </span>
        </div>

        <h2 className="text-sm font-bold leading-relaxed text-white">
          {title}
        </h2>

        <p className="text-xs leading-relaxed text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
}

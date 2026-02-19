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
    <div className="bg-white border-4 border-black p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="px-2 py-1 bg-gray-200 text-xs">
          {getEventTypeLabel(currentEvent.type)}
        </span>
      </div>

      <h2 className="text-sm font-bold leading-relaxed">
        {title}
      </h2>

      <p className="text-xs leading-relaxed text-gray-700">
        {description}
      </p>
    </div>
  );
}

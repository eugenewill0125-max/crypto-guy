import { useLanguage } from '../i18n/LanguageContext';

interface TutorialSkipProps {
  onSkip: () => void;
}

export default function TutorialSkip({ onSkip }: TutorialSkipProps) {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={onSkip}
        className="bg-yellow-500 text-black px-4 py-2 text-xs sm:text-sm border-4 border-black rounded hover:bg-yellow-400 active:bg-yellow-600 shadow-xl transition-all"
      >
        ⏭️ {language === 'zh' ? '跳过教程' : 'Skip Tutorial'}
      </button>
    </div>
  );
}

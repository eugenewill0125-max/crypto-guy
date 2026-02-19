import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';

interface GameOverProps {
  onBackToMenu?: () => void;
}

export default function GameOver({ onBackToMenu }: GameOverProps) {
  const { currentMonth, resetGame } = useGameStore();
  const { language, t } = useLanguage();

  return (
    <div className="flex items-center justify-center p-4 min-h-[50vh]">
      <div className="bg-white border-4 border-black p-8 max-w-md text-center space-y-4">
        <h1 className="text-xl font-bold">{t('gameOver')}</h1>
        <p className="text-xs leading-relaxed">
          {t('gameOverDesc')}
          <br />
          {t('survivedMonths')} {currentMonth} {t('months')}。
        </p>
        <div className="space-y-2">
          <button
            onClick={resetGame}
            className="w-full bg-profit text-white p-3 text-xs border-2 border-black hover:brightness-110"
          >
            {t('restart')}
          </button>
          {onBackToMenu && (
            <button
              onClick={onBackToMenu}
              className="w-full bg-gray-400 text-white p-3 text-xs border-2 border-black hover:brightness-110"
            >
              {language === 'zh' ? '返回主菜单' : 'Back to Menu'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

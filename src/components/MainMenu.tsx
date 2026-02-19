import { useLanguage } from '../i18n/LanguageContext';

interface MainMenuProps {
  onNewGame: () => void;
  onContinue: () => void;
  onToggleMute: () => void;
  isMuted: boolean;
}

export default function MainMenu({ onNewGame, onContinue, onToggleMute, isMuted }: MainMenuProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white border-4 sm:border-8 border-black rounded-lg shadow-2xl p-6 sm:p-8 max-w-md w-full">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">CRYPTO GUY</h1>
          <div className="text-xs sm:text-sm text-gray-600">
            {language === 'zh' ? '加密货币模拟交易游戏' : 'Crypto Trading Simulator'}
          </div>
        </div>

        {/* 菜单按钮 */}
        <div className="space-y-3">
          <button
            onClick={onNewGame}
            className="w-full bg-profit text-white p-4 text-sm sm:text-base border-4 border-black hover:brightness-110 active:brightness-90 transition-all"
          >
            {language === 'zh' ? '🎮 新游戏' : '🎮 New Game'}
          </button>

          <button
            onClick={onContinue}
            className="w-full bg-gray-400 text-white p-4 text-sm sm:text-base border-4 border-black hover:brightness-110 active:brightness-90 transition-all opacity-50 cursor-not-allowed"
            disabled
          >
            {language === 'zh' ? '💾 继续游戏' : '💾 Continue'}
            <span className="text-xs block mt-1">
              {language === 'zh' ? '(即将推出)' : '(Coming Soon)'}
            </span>
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={toggleLanguage}
              className="bg-white text-black p-3 text-sm border-4 border-black hover:bg-gray-100 active:bg-gray-200 transition-all"
            >
              {language === 'zh' ? '🌐 中/EN' : '🌐 EN/中'}
            </button>

            <button
              onClick={onToggleMute}
              className="bg-white text-black p-3 text-sm border-4 border-black hover:bg-gray-100 active:bg-gray-200 transition-all"
            >
              {isMuted ? '🔇' : '🔊'} {language === 'zh' ? '音效' : 'Sound'}
            </button>
          </div>
        </div>

        {/* 版本信息 */}
        <div className="text-center mt-8 text-xs text-gray-500">
          v1.0.0 - Tutorial Stage
        </div>
      </div>
    </div>
  );
}

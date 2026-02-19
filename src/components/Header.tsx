import { useGameStore } from '../store/gameStore';
import { tokens } from '../data/tokens';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const { balance, positions, currentMonth } = useGameStore();
  const { language, setLanguage, t } = useLanguage();

  const totalValue = balance + positions.reduce((sum, p) => {
    return sum + p.amount * tokens[p.tokenId].currentPrice;
  }, 0);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="bg-white border-4 border-black p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xs sm:text-sm">{t('gameTitle')}</h1>
        <div className="flex items-center gap-2">
          <div className="text-xs">{t('month')}: {currentMonth}</div>
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 bg-gray-200 border-2 border-black hover:bg-gray-300 text-xs"
            title="Switch Language"
          >
            {language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <div className="text-gray-500">{t('balance')}</div>
          <div className="font-bold">${balance.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-gray-500">{t('totalAssets')}</div>
          <div className={`font-bold ${totalValue >= 1000 ? 'text-profit' : 'text-loss'}`}>
            ${totalValue.toFixed(2)}
          </div>
        </div>
      </div>

      {positions.length > 0 && (
        <div className="mt-2 pt-2 border-t-2 border-gray-200">
          <div className="text-xs text-gray-500 mb-1">{t('holdings')}</div>
          {positions.map(p => {
            const token = tokens[p.tokenId];
            const currentValue = p.amount * token.currentPrice;
            const cost = p.amount * p.averagePrice;
            const profit = currentValue - cost;
            const profitPercent = ((currentValue - cost) / cost) * 100;

            return (
              <div key={p.tokenId} className="flex justify-between text-xs">
                <span>{token.symbol}: {p.amount.toFixed(4)}</span>
                <span className={profit >= 0 ? 'text-profit' : 'text-loss'}>
                  {profit >= 0 ? '+' : ''}{profitPercent.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

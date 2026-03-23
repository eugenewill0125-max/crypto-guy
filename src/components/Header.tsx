import { useGameStore } from '../store/gameStore';
import { tokens } from '../data/tokens';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const { balance, positions, currentMonth, unlockedTokens } = useGameStore();
  const { language, setLanguage, t } = useLanguage();

  const totalValue = balance + positions.reduce((sum, p) => {
    const token = tokens[p.tokenId];
    return sum + (token ? p.amount * token.currentPrice : 0);
  }, 0);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const formatPrice = (price: number) => {
    if (price < 1) return `$${price.toFixed(4)}`;
    if (price < 100) return `$${price.toFixed(2)}`;
    return `$${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  return (
    <div
      className="border-4 border-black p-4 space-y-2 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/header-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-55" />
      <div className="relative z-10 space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xs sm:text-sm text-white">{t('gameTitle')}</h1>
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-200">{t('month')}: {currentMonth}</div>
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
          <div className="text-gray-400">{t('balance')}</div>
          <div className="font-bold text-white">${balance.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-gray-400">{t('totalAssets')}</div>
          <div className={`font-bold ${totalValue >= 1000 ? 'text-profit' : 'text-loss'}`}>
            ${totalValue.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Token prices */}
      {unlockedTokens.length > 1 && (
        <div className="mt-1 pt-1 border-t-2 border-gray-200">
          <div className="grid grid-cols-4 gap-1 text-xs">
            {unlockedTokens.map(tid => {
              const token = tokens[tid];
              if (!token) return null;
              return (
                <div key={tid} className="text-center">
                  <div className="text-gray-400">{token.symbol}</div>
                  <div className="font-bold text-white">{formatPrice(token.currentPrice)}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {positions.length > 0 && (
        <div className="mt-2 pt-2 border-t-2 border-gray-200">
          <div className="text-xs text-gray-400 mb-1">{t('holdings')}</div>
          {positions.map(p => {
            const token = tokens[p.tokenId];
            if (!token) return null;
            const currentValue = p.amount * token.currentPrice;
            const cost = p.amount * p.averagePrice;
            const profit = currentValue - cost;
            const profitPercent = cost > 0 ? ((currentValue - cost) / cost) * 100 : 0;

            return (
              <div key={p.tokenId} className="flex justify-between text-xs text-gray-200">
                <span>{token.symbol}: {p.amount < 1 ? p.amount.toFixed(4) : p.amount.toFixed(2)}</span>
                <span className={profit >= 0 ? 'text-profit' : 'text-loss'}>
                  {profit >= 0 ? '+' : ''}{profitPercent.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { tokens } from '../data/tokens';
import { useLanguage } from '../i18n/LanguageContext';

export default function TradePanel() {
  const { executeTrade, endMonth, balance, positions, unlockedTokens } = useGameStore();
  const { t } = useLanguage();
  const [selectedToken, setSelectedToken] = useState<string>('btc');
  const [buyHover, setBuyHover] = useState(false);
  const [sellHover, setSellHover] = useState(false);
  const [allInHover, setAllInHover] = useState(false);

  const token = tokens[selectedToken];
  const currentPrice = token?.currentPrice || 0;
  const position = positions.find(p => p.tokenId === selectedToken);
  const maxBuy = currentPrice > 0 ? balance / currentPrice : 0;
  const maxSell = position?.amount || 0;

  // Format price display based on magnitude
  const formatPrice = (price: number) => {
    if (price < 1) return `$${price.toFixed(4)}`;
    if (price < 100) return `$${price.toFixed(2)}`;
    return `$${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const formatAmount = (val: number) => {
    if (currentPrice > 10000) return val.toFixed(4);
    if (currentPrice > 100) return val.toFixed(2);
    if (currentPrice > 1) return val.toFixed(1);
    return val.toFixed(0);
  };

  const handleBuyPct = (pct: number) => {
    const amt = maxBuy * pct;
    if (amt <= 0) return;
    executeTrade('buy', parseFloat(formatAmount(amt)), selectedToken);
  };

  const handleSellPct = (pct: number) => {
    const amt = maxSell * pct;
    if (amt <= 0) return;
    executeTrade('sell', parseFloat(formatAmount(amt)), selectedToken);
  };

  const pctOptions = [0.25, 0.5, 0.75, 1];

  return (
    <div
      className="border-4 border-black p-4 space-y-4 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/trade-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 space-y-4">
      <div className="text-sm font-bold text-white">{t('tradeOperations')}</div>

      {/* Token Selector */}
      {unlockedTokens.length > 1 && (
        <div className="flex gap-1 flex-wrap">
          {unlockedTokens.map(tid => {
            const tk = tokens[tid];
            if (!tk) return null;
            const isSelected = selectedToken === tid;
            return (
              <button
                key={tid}
                onClick={() => setSelectedToken(tid)}
                className={`px-3 py-1 text-xs border-2 border-black transition-colors ${
                  isSelected
                    ? 'bg-black text-primary'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {tk.symbol}
              </button>
            );
          })}
        </div>
      )}

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-200">
          <span>{token?.symbol} {t('price')}</span>
          <span className="font-bold text-white">{formatPrice(currentPrice)}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-200">
          <span>{t('maxBuy')}</span>
          <span>{formatAmount(maxBuy)} {token?.symbol}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-200">
          <span>{t('maxSell')}</span>
          <span>{formatAmount(maxSell)} {token?.symbol}</span>
        </div>
      </div>

      {/* Buy Button with hover percentages */}
      <div className="relative"
        onMouseEnter={() => setBuyHover(true)}
        onMouseLeave={() => { setBuyHover(false); setAllInHover(false); }}
      >
        <button
          className="w-full text-white p-3 text-xs border-2 border-black transition-all"
          style={{ backgroundColor: '#5a8a3c' }}
        >
          {t('buy')}
        </button>
        {buyHover && (
          <div className="absolute left-0 right-0 bottom-full flex gap-0">
            {pctOptions.map(pct => {
              const isMax = pct === 1;
              const isAllIn = isMax && allInHover;
              return (
                <button
                  key={pct}
                  onClick={() => handleBuyPct(pct)}
                  onMouseEnter={() => isMax && setAllInHover(true)}
                  onMouseLeave={() => isMax && setAllInHover(false)}
                  className={`flex-1 py-1 text-xs font-bold border border-gray-600 transition-all ${
                    isAllIn
                      ? 'bg-red-600 text-white animate-shake'
                      : 'bg-gray-800 bg-opacity-90 text-gray-200 hover:bg-gray-700'
                  }`}
                >
                  {isAllIn ? 'ALL IN' : isMax ? 'MAX' : `${pct * 100}%`}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Sell Button with hover percentages */}
      <div className="relative"
        onMouseEnter={() => setSellHover(true)}
        onMouseLeave={() => setSellHover(false)}
      >
        <button
          className="w-full text-white p-3 text-xs border-2 border-black transition-all"
          style={{ backgroundColor: '#a84632' }}
        >
          {t('sell')}
        </button>
        {sellHover && (
          <div className="absolute left-0 right-0 bottom-full flex gap-0">
            {pctOptions.map(pct => (
              <button
                key={pct}
                onClick={() => handleSellPct(pct)}
                className="flex-1 py-1 text-xs font-bold border border-gray-600 bg-gray-800 bg-opacity-90 text-gray-200 hover:bg-gray-700 transition-all"
              >
                {pct === 1 ? 'MAX' : `${pct * 100}%`}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={endMonth}
        className="w-full text-primary p-3 text-xs border-2 border-black hover:brightness-110"
        style={{ backgroundColor: '#2a2a2a' }}
      >
        {t('endMonth')}
      </button>
      </div>
    </div>
  );
}

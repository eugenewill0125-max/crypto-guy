import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { tokens } from '../data/tokens';
import { useLanguage } from '../i18n/LanguageContext';

export default function TradePanel() {
  const { executeTrade, endMonth, balance, positions, unlockedTokens } = useGameStore();
  const { t } = useLanguage();
  const [amount, setAmount] = useState<string>('0.01');
  const [selectedToken, setSelectedToken] = useState<string>('btc');

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

  // Format amount based on token
  const getStep = () => {
    if (currentPrice > 10000) return '0.01';
    if (currentPrice > 100) return '0.1';
    if (currentPrice > 1) return '1';
    return '100';
  };

  const formatAmount = (val: number) => {
    if (currentPrice > 10000) return val.toFixed(4);
    if (currentPrice > 100) return val.toFixed(2);
    if (currentPrice > 1) return val.toFixed(1);
    return val.toFixed(0);
  };

  const handleBuy = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) { alert(t('invalidAmount')); return; }
    const cost = amt * currentPrice;
    if (cost > balance) { alert(t('insufficientBalance')); return; }
    executeTrade('buy', amt, selectedToken);
  };

  const handleSell = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) { alert(t('invalidAmount')); return; }
    if (amt > maxSell) { alert(t('insufficientHoldings')); return; }
    executeTrade('sell', amt, selectedToken);
  };

  const handleIdle = () => {
    executeTrade('idle', 0, selectedToken);
  };

  return (
    <div
      className="border-4 border-black p-4 space-y-4 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/trade-bg.jpg)' }}
    >
      {/* 半透明遮罩确保文字可读 */}
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
                onClick={() => {
                  setSelectedToken(tid);
                  setAmount(getStep());
                }}
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

      <div className="space-y-2">
        <label className="block text-xs text-gray-200">{t('tradeAmount')} ({token?.symbol})</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step={getStep()}
          min="0"
          className="w-full border-2 border-gray-600 p-2 text-xs text-gray-200 bg-black bg-opacity-40"
          placeholder={getStep()}
        />
        <div className="flex gap-2 text-xs">
          {[0.25, 0.5, 0.75, 1].map(pct => (
            <button
              key={pct}
              onClick={() => setAmount(formatAmount(maxBuy * pct))}
              className="px-2 py-1 bg-gray-700 bg-opacity-70 text-gray-300 border-2 border-gray-600 hover:bg-gray-600"
            >
              {pct === 1 ? 'MAX' : `${pct * 100}%`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleBuy}
          className="text-white p-3 text-xs border-2 border-black hover:brightness-110 active:brightness-90"
          style={{ backgroundColor: '#5a8a3c' }}
        >
          {t('buy')}
        </button>
        <button
          onClick={handleSell}
          className="text-white p-3 text-xs border-2 border-black hover:brightness-110 active:brightness-90"
          style={{ backgroundColor: '#a84632' }}
        >
          {t('sell')}
        </button>
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

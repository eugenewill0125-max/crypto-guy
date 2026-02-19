import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { tokens } from '../data/tokens';
import { useLanguage } from '../i18n/LanguageContext';

export default function TradePanel() {
  const { executeTrade, endMonth, balance, positions } = useGameStore();
  const { t } = useLanguage();
  const [amount, setAmount] = useState<string>('0.01');

  const btcPrice = tokens.btc.currentPrice;
  const btcPosition = positions.find(p => p.tokenId === 'btc');
  const maxBuy = balance / btcPrice;
  const maxSell = btcPosition?.amount || 0;

  const handleBuy = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      alert(t('invalidAmount'));
      return;
    }
    const cost = amt * btcPrice;
    if (cost > balance) {
      alert(t('insufficientBalance'));
      return;
    }
    executeTrade('buy', amt);
  };

  const handleSell = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      alert(t('invalidAmount'));
      return;
    }
    if (amt > maxSell) {
      alert(t('insufficientHoldings'));
      return;
    }
    executeTrade('sell', amt);
  };

  const handleIdle = () => {
    executeTrade('idle', 0);
  };

  return (
    <div className="bg-white border-4 border-black p-4 space-y-4">
      <div className="text-sm font-bold">{t('tradeOperations')}</div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span>BTC {t('price')}</span>
          <span className="font-bold">${btcPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>{t('maxBuy')}</span>
          <span>{maxBuy.toFixed(4)} BTC</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>{t('maxSell')}</span>
          <span>{maxSell.toFixed(4)} BTC</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs">{t('tradeAmount')} (BTC)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          min="0"
          className="w-full border-2 border-black p-2 text-xs"
          placeholder="0.01"
        />
        <div className="flex gap-2 text-xs">
          <button
            onClick={() => setAmount((maxBuy * 0.25).toFixed(4))}
            className="px-2 py-1 bg-gray-200 border-2 border-black hover:bg-gray-300"
          >
            25%
          </button>
          <button
            onClick={() => setAmount((maxBuy * 0.5).toFixed(4))}
            className="px-2 py-1 bg-gray-200 border-2 border-black hover:bg-gray-300"
          >
            50%
          </button>
          <button
            onClick={() => setAmount((maxBuy * 0.75).toFixed(4))}
            className="px-2 py-1 bg-gray-200 border-2 border-black hover:bg-gray-300"
          >
            75%
          </button>
          <button
            onClick={() => setAmount(maxBuy.toFixed(4))}
            className="px-2 py-1 bg-gray-200 border-2 border-black hover:bg-gray-300"
          >
            MAX
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={handleBuy}
          className="bg-profit text-white p-3 text-xs border-2 border-black hover:brightness-110 active:brightness-90"
        >
          {t('buy')}
        </button>
        <button
          onClick={handleSell}
          className="bg-loss text-white p-3 text-xs border-2 border-black hover:brightness-110 active:brightness-90"
        >
          {t('sell')}
        </button>
        <button
          onClick={handleIdle}
          className="bg-gray-400 text-white p-3 text-xs border-2 border-black hover:brightness-110 active:brightness-90"
        >
          {t('hold')}
        </button>
      </div>

      <button
        onClick={endMonth}
        className="w-full bg-black text-primary p-3 text-xs border-2 border-black hover:bg-gray-800"
      >
        {t('endMonth')}
      </button>
    </div>
  );
}

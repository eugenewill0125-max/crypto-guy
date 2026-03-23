import { useState, useCallback, useRef, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { tokens } from '../data/tokens';
import { useLanguage } from '../i18n/LanguageContext';
import PixelToast from './PixelToast';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'info';
}

export default function TradePanel() {
  const { executeTrade, endMonth, balance, positions, unlockedTokens } = useGameStore();
  const { t, language } = useLanguage();
  const [amount, setAmount] = useState<string>('0.01');
  const [selectedToken, setSelectedToken] = useState<string>('btc');
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  const [allInHover, setAllInHover] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const buyRef = useRef<HTMLDivElement>(null);
  const sellRef = useRef<HTMLDivElement>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type });
  }, []);

  // Close panels when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (buyRef.current && !buyRef.current.contains(e.target as Node)) {
        setBuyOpen(false);
        setAllInHover(false);
      }
      if (sellRef.current && !sellRef.current.contains(e.target as Node)) {
        setSellOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const token = tokens[selectedToken];
  const currentPrice = token?.currentPrice || 0;
  const position = positions.find(p => p.tokenId === selectedToken);
  const maxBuy = currentPrice > 0 ? balance / currentPrice : 0;
  const maxSell = position?.amount || 0;

  const formatPrice = (price: number) => {
    if (price < 1) return `$${price.toFixed(4)}`;
    if (price < 100) return `$${price.toFixed(2)}`;
    return `$${price.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

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

  const insufficientBalance = language === 'zh' ? '余额不足！' : 'Insufficient balance!';
  const insufficientHoldings = language === 'zh' ? '持仓不足！' : 'Insufficient holdings!';
  const buySuccessMsg = (amt: string, sym: string) => language === 'zh' ? `成功买入 ${amt} ${sym}` : `Bought ${amt} ${sym}`;
  const sellSuccessMsg = (amt: string, sym: string) => language === 'zh' ? `成功卖出 ${amt} ${sym}` : `Sold ${amt} ${sym}`;

  const handleBuy = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) { showToast(t('invalidAmount'), 'error'); return; }
    const cost = amt * currentPrice;
    if (cost > balance) { showToast(insufficientBalance, 'error'); return; }
    executeTrade('buy', amt, selectedToken);
    showToast(buySuccessMsg(formatAmount(amt), token?.symbol || ''), 'success');
  };

  const handleSell = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) { showToast(t('invalidAmount'), 'error'); return; }
    if (amt > maxSell) { showToast(insufficientHoldings, 'error'); return; }
    executeTrade('sell', amt, selectedToken);
    showToast(sellSuccessMsg(formatAmount(amt), token?.symbol || ''), 'success');
  };

  const handleBuyPct = (pct: number) => {
    const amt = maxBuy * pct;
    if (amt <= 0) { showToast(insufficientBalance, 'error'); return; }
    const finalAmt = parseFloat(formatAmount(amt));
    executeTrade('buy', finalAmt, selectedToken);
    showToast(buySuccessMsg(formatAmount(amt), token?.symbol || ''), 'success');
  };

  const handleSellPct = (pct: number) => {
    const amt = maxSell * pct;
    if (amt <= 0) { showToast(insufficientHoldings, 'error'); return; }
    const finalAmt = parseFloat(formatAmount(amt));
    executeTrade('sell', finalAmt, selectedToken);
    showToast(sellSuccessMsg(formatAmount(amt), token?.symbol || ''), 'success');
  };

  // Buy button click: if panel closed → open panel; if panel open → execute buy by amount
  const handleBuyClick = () => {
    if (!buyOpen) {
      setBuyOpen(true);
      setSellOpen(false);
    } else {
      handleBuy();
    }
  };

  // Sell button click: if panel closed → open panel; if panel open → execute sell by amount
  const handleSellClick = () => {
    if (!sellOpen) {
      setSellOpen(true);
      setBuyOpen(false);
    } else {
      handleSell();
    }
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

      {/* Amount Input */}
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
      </div>

      {/* Buy Button + % panel */}
      <div className="relative" ref={buyRef}
        onMouseEnter={() => setBuyOpen(true)}
        onMouseLeave={() => { setBuyOpen(false); setAllInHover(false); }}
      >
        {buyOpen && (
          <div className="absolute left-0 right-0 bottom-full flex gap-0">
            {pctOptions.map(pct => {
              const isMax = pct === 1;
              const isAllIn = isMax && allInHover;
              return (
                <button
                  key={pct}
                  onClick={(e) => { e.stopPropagation(); handleBuyPct(pct); }}
                  onMouseEnter={() => isMax && setAllInHover(true)}
                  onMouseLeave={() => isMax && setAllInHover(false)}
                  onTouchStart={() => isMax && setAllInHover(true)}
                  className={`flex-1 py-1 text-xs font-bold border border-gray-600 transition-all ${
                    isAllIn
                      ? 'text-white'
                      : 'bg-gray-800 bg-opacity-90 text-gray-200 hover:bg-gray-700'
                  }`}
                  style={isAllIn ? {
                    backgroundColor: '#dc2626',
                    animation: 'shake 0.4s ease-in-out infinite',
                  } : undefined}
                >
                  {isAllIn ? 'ALL IN' : isMax ? 'MAX' : `${pct * 100}%`}
                </button>
              );
            })}
          </div>
        )}
        <button
          onClick={handleBuyClick}
          className="w-full text-white p-3 text-xs border-2 border-black hover:brightness-110 active:brightness-90"
          style={{ backgroundColor: '#5a8a3c' }}
        >
          {t('buy')}
        </button>
      </div>

      {/* Sell Button + % panel */}
      <div className="relative" ref={sellRef}
        onMouseEnter={() => setSellOpen(true)}
        onMouseLeave={() => setSellOpen(false)}
      >
        {sellOpen && (
          <div className="absolute left-0 right-0 bottom-full flex gap-0">
            {pctOptions.map(pct => (
              <button
                key={pct}
                onClick={(e) => { e.stopPropagation(); handleSellPct(pct); }}
                className="flex-1 py-1 text-xs font-bold border border-gray-600 bg-gray-800 bg-opacity-90 text-gray-200 hover:bg-gray-700 transition-all"
              >
                {pct === 1 ? 'MAX' : `${pct * 100}%`}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={handleSellClick}
          className="w-full text-white p-3 text-xs border-2 border-black hover:brightness-110 active:brightness-90"
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
      {toast && (
        <PixelToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

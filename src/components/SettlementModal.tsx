import { useLanguage } from '../i18n/LanguageContext';
import { getCurrentSECChair } from '../data/secChairs';
import { eventTranslations } from '../data/eventTranslations';
import { findEventById } from '../data/events';

interface SettlementModalProps {
  month: number;
  priceChange: number;
  originalPriceChange: number;
  profitLoss: number;
  newBalance: number;
  eventId?: string;
  onClose: () => void;
}

export default function SettlementModal({ 
  month, 
  priceChange, 
  originalPriceChange,
  profitLoss, 
  newBalance,
  eventId,
  onClose 
}: SettlementModalProps) {
  const { language } = useLanguage();
  const secChair = getCurrentSECChair(month - 1); // 上个月的主席

  // 获取事件结果解释
  let eventResultText: string | undefined;
  if (eventId) {
    const translation = eventTranslations[eventId];
    if (translation?.resultDescription) {
      eventResultText = translation.resultDescription[language];
    } else {
      const evt = findEventById(eventId);
      eventResultText = evt?.resultDescription;
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white border-4 border-black rounded-lg shadow-2xl p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 标题 */}
        <div className="text-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold">
            {language === 'zh' ? '📊 月末结算' : '📊 Monthly Settlement'}
          </h2>
          <div className="text-xs text-gray-500 mt-1">
            {language === 'zh' ? `第 ${month - 1} 月` : `Month ${month - 1}`}
          </div>
        </div>

        {/* 价格变化 */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <div className="text-sm mb-2 text-center font-bold">
            {language === 'zh' ? 'BTC 价格变化' : 'BTC Price Change'}
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className={`text-2xl font-bold ${priceChange >= 0 ? 'text-profit' : 'text-loss'}`}>
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
            </span>
          </div>

          {/* 显示SEC修正 */}
          {originalPriceChange !== priceChange && (
            <div className="text-xs text-gray-600 text-center space-y-1">
              <div>
                {language === 'zh' ? '原始变化' : 'Original'}: {originalPriceChange >= 0 ? '+' : ''}{originalPriceChange}%
              </div>
              <div className="flex items-center justify-center gap-1">
                <span>{language === 'zh' ? 'SEC 影响' : 'SEC Impact'}:</span>
                <span className="font-bold">{secChair.name[language]}</span>
              </div>
            </div>
          )}
        </div>

        {/* 盈亏情况 */}
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">{language === 'zh' ? '本月盈亏' : 'P/L'}:</span>
            <span className={`text-lg font-bold ${profitLoss >= 0 ? 'text-profit' : 'text-loss'}`}>
              {profitLoss >= 0 ? '+' : ''}${profitLoss.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300">
            <span className="text-sm font-bold">{language === 'zh' ? '当前总资产' : 'Total Assets'}:</span>
            <span className={`text-lg font-bold ${newBalance >= 1000 ? 'text-profit' : 'text-loss'}`}>
              ${newBalance.toFixed(2)}
            </span>
          </div>
        </div>

        {/* 事件结果解释 */}
        {eventResultText && (
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-3 mb-4">
            <div className="text-xs font-bold mb-1">
              {language === 'zh' ? '📰 事件结果' : '📰 Event Outcome'}
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              {eventResultText}
            </p>
          </div>
        )}

        {/* 继续按钮 */}
        <button
          onClick={onClose}
          className="w-full bg-black text-white py-3 text-sm border-2 border-black hover:bg-gray-800 transition-all"
        >
          {language === 'zh' ? '继续下一月 →' : 'Continue →'}
        </button>
      </div>
    </div>
  );
}

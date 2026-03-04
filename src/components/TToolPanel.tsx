import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';

const TTOOL_PRICE = 5000;

export default function TToolPanel() {
  const { balance, tToolUnlocked, unlockTTool } = useGameStore();
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [justPurchased, setJustPurchased] = useState(false);

  const handleClick = () => {
    if (tToolUnlocked) return;
    setShowModal(true);
  };

  const handlePurchase = () => {
    if (balance < TTOOL_PRICE) return;
    unlockTTool();
    setJustPurchased(true);
    setTimeout(() => {
      setJustPurchased(false);
      setShowModal(false);
    }, 1500);
  };

  const canAfford = balance >= TTOOL_PRICE;

  return (
    <>
      <div className="w-24 sm:w-32 relative">
        <div
          className={`bg-white border-2 sm:border-4 border-black rounded-lg shadow-xl overflow-hidden cursor-pointer ${!tToolUnlocked ? 'hover:border-yellow-500' : ''}`}
          onClick={handleClick}
        >
          {/* 标题 */}
          <div className="bg-blue-600 text-white text-center py-0.5 sm:py-1 border-b-2 sm:border-b-4 border-black">
            <div className="text-[8px] sm:text-xs font-bold leading-tight">T-TOOL</div>
          </div>

          {/* Logo 区域 */}
          <div className="p-1 sm:p-2 bg-gray-100 relative">
            <img
              src="/t-tool-logo.jpg"
              alt="T-tool"
              className="w-full aspect-square object-cover border-2 sm:border-4 border-black rounded"
              style={{ imageRendering: 'pixelated' }}
            />

            {/* 锁蒙版 */}
            {!tToolUnlocked && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center m-1 sm:m-2">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl">🔒</div>
                  <div className="text-[7px] sm:text-[9px] text-white font-bold mt-1">
                    ${TTOOL_PRICE.toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 底部状态 */}
          <div className="p-1 bg-white border-t-2 sm:border-t-4 border-black">
            <div className="text-[7px] sm:text-xs font-bold text-center truncate leading-tight">
              {tToolUnlocked
                ? (language === 'zh' ? '已解锁' : 'Unlocked')
                : (language === 'zh' ? '点击购买' : 'Click to Buy')}
            </div>
          </div>
        </div>
      </div>

      {/* 购买弹窗 */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => !justPurchased && setShowModal(false)}
        >
          <div
            className="bg-white border-4 border-black rounded-lg shadow-2xl p-4 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {justPurchased ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">🎉</div>
                <div className="text-sm font-bold">
                  {language === 'zh' ? '购买成功！' : 'Purchase Complete!'}
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  {language === 'zh' ? 'T-Tool 已解锁' : 'T-Tool Unlocked'}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/t-tool-logo.jpg"
                    alt="T-tool"
                    className="w-16 h-16 object-cover border-4 border-black rounded"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <div>
                    <div className="text-sm font-bold">T-Tool</div>
                    <div className="text-[10px] text-gray-600 mt-1">
                      {language === 'zh'
                        ? '解锁 T-Tool 工具，获得更多交易能力！'
                        : 'Unlock T-Tool for enhanced trading capabilities!'}
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-3 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>{language === 'zh' ? '价格' : 'Price'}:</span>
                    <span className="font-bold">${TTOOL_PRICE.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>{language === 'zh' ? '当前余额' : 'Balance'}:</span>
                    <span className={`font-bold ${canAfford ? 'text-profit' : 'text-loss'}`}>
                      ${balance.toFixed(2)}
                    </span>
                  </div>
                </div>

                {!canAfford && (
                  <div className="mt-3 bg-red-100 border-2 border-red-400 rounded p-2 text-center">
                    <div className="text-xs text-red-600 font-bold">
                      {language === 'zh' ? '余额不足！' : 'Insufficient Balance!'}
                    </div>
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-200 text-black py-2 text-xs border-2 border-black hover:bg-gray-300"
                  >
                    {language === 'zh' ? '取消' : 'Cancel'}
                  </button>
                  <button
                    onClick={handlePurchase}
                    disabled={!canAfford}
                    className={`flex-1 py-2 text-xs border-2 border-black ${
                      canAfford
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {language === 'zh' ? '购买 $5,000' : 'Buy $5,000'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

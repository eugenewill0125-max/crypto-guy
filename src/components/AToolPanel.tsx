import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';

const ATOOL_PRICE = 3000;

export default function AToolPanel() {
  const { balance, aToolUnlocked, unlockATool } = useGameStore();
  const { language } = useLanguage();
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [justPurchased, setJustPurchased] = useState(false);

  const handleClick = () => {
    if (aToolUnlocked) {
      setShowInfoModal(true);
    } else {
      setShowBuyModal(true);
    }
  };

  const handlePurchase = () => {
    if (balance < ATOOL_PRICE) return;
    unlockATool();
    setJustPurchased(true);
    setTimeout(() => {
      setJustPurchased(false);
      setShowBuyModal(false);
    }, 1500);
  };

  const canAfford = balance >= ATOOL_PRICE;

  return (
    <>
      <div className="w-24 sm:w-32 relative">
        <div
          className={`bg-white border-2 sm:border-4 border-black rounded-lg shadow-xl overflow-hidden cursor-pointer ${!aToolUnlocked ? 'hover:border-yellow-500' : 'hover:border-purple-500'}`}
          onClick={handleClick}
        >
          {/* 标题 */}
          <div className="bg-purple-600 text-white text-center py-0.5 sm:py-1 border-b-2 sm:border-b-4 border-black">
            <div className="text-[8px] sm:text-xs font-bold leading-tight">A-TOOL</div>
          </div>

          {/* Logo 区域 */}
          <div className="p-1 sm:p-2 bg-gray-100 relative">
            <img
              src="/a-tool-logo.jpg"
              alt="A-tool"
              className="w-full aspect-square object-cover border-2 sm:border-4 border-black rounded"
              style={{ imageRendering: 'pixelated' }}
            />

            {/* 锁蒙版 */}
            {!aToolUnlocked && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center m-1 sm:m-2">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl">🔒</div>
                  <div className="text-[7px] sm:text-[9px] text-white font-bold mt-1">
                    ${ATOOL_PRICE.toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 底部状态 */}
          <div className="p-1 bg-white border-t-2 sm:border-t-4 border-black">
            <div className="text-[7px] sm:text-xs font-bold text-center truncate leading-tight">
              {aToolUnlocked
                ? (language === 'zh' ? '已解锁' : 'Unlocked')
                : (language === 'zh' ? '点击购买' : 'Click to Buy')}
            </div>
          </div>
        </div>
      </div>

      {/* 购买弹窗 */}
      {showBuyModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => !justPurchased && setShowBuyModal(false)}
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
                  {language === 'zh' ? 'A-Tool 已解锁，链上事件已开启！' : 'A-Tool Unlocked, On-chain Events Active!'}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/a-tool-logo.jpg"
                    alt="A-tool"
                    className="w-16 h-16 object-cover border-4 border-black rounded"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <div>
                    <div className="text-sm font-bold">A-Tool</div>
                    <div className="text-[10px] text-gray-600 mt-1">
                      {language === 'zh'
                        ? '解锁 A-Tool，开启链上事件玩法！追踪链上数据，获取独家市场信号。'
                        : 'Unlock A-Tool for on-chain events! Track on-chain data and get exclusive market signals.'}
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-3 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>{language === 'zh' ? '价格' : 'Price'}:</span>
                    <span className="font-bold">${ATOOL_PRICE.toLocaleString()}</span>
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
                    onClick={() => setShowBuyModal(false)}
                    className="flex-1 bg-gray-200 text-black py-2 text-xs border-2 border-black hover:bg-gray-300"
                  >
                    {language === 'zh' ? '取消' : 'Cancel'}
                  </button>
                  <button
                    onClick={handlePurchase}
                    disabled={!canAfford}
                    className={`flex-1 py-2 text-xs border-2 border-black ${
                      canAfford
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {language === 'zh' ? '购买 $3,000' : 'Buy $3,000'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 信息弹窗（已解锁后） */}
      {showInfoModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="bg-white border-4 border-black rounded-lg shadow-2xl p-4 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/a-tool-logo.jpg"
                alt="A-tool"
                className="w-16 h-16 object-cover border-4 border-purple-500 rounded"
                style={{ imageRendering: 'pixelated' }}
              />
              <div>
                <div className="text-sm font-bold">A-Tool</div>
                <div className="text-[10px] text-green-600 font-bold mt-1">
                  {language === 'zh'
                    ? '🎉 链上事件已解锁！'
                    : '🎉 On-chain Events Unlocked!'}
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-3">
              <div className="text-xs text-gray-600 leading-relaxed">
                {language === 'zh'
                  ? '链上数据分析工具已激活！你现在可以接收链上事件，包括巨鲸转账、DEX 交易量异动、智能合约部署等链上信号，帮助你做出更精准的交易决策。'
                  : 'On-chain analytics tool activated! You can now receive on-chain events including whale transfers, DEX volume spikes, smart contract deployments, and other on-chain signals to make better trading decisions.'}
              </div>
            </div>

            <button
              onClick={() => setShowInfoModal(false)}
              className="w-full mt-4 bg-black text-white py-2 text-xs border-2 border-black hover:bg-gray-800"
            >
              {language === 'zh' ? '关闭' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

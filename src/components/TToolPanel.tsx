import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';

const TTOOL_PRICE = 5000;
const BLUE_CHECK_PRICE = 10000;

export default function TToolPanel() {
  const { balance, tToolUnlocked, blueCheckUnlocked, unlockTTool, unlockBlueCheck } = useGameStore();
  const { language } = useLanguage();
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [justPurchased, setJustPurchased] = useState(false);
  const [purchaseType, setPurchaseType] = useState<'ttool' | 'bluecheck'>('ttool');

  const handleClick = () => {
    if (tToolUnlocked) {
      setShowInfoModal(true);
    } else {
      setShowBuyModal(true);
    }
  };

  const handlePurchaseTTool = () => {
    if (balance < TTOOL_PRICE) return;
    unlockTTool();
    setPurchaseType('ttool');
    setJustPurchased(true);
    setTimeout(() => {
      setJustPurchased(false);
      setShowBuyModal(false);
    }, 1500);
  };

  const handlePurchaseBlueCheck = () => {
    if (balance < BLUE_CHECK_PRICE) return;
    unlockBlueCheck();
    setPurchaseType('bluecheck');
    setJustPurchased(true);
    setTimeout(() => {
      setJustPurchased(false);
      setShowInfoModal(false);
    }, 1500);
  };

  const canAffordTTool = balance >= TTOOL_PRICE;
  const canAffordBlueCheck = balance >= BLUE_CHECK_PRICE;

  return (
    <>
      <div className="w-24 sm:w-32 relative group">
        <div
          className={`bg-white border-2 sm:border-4 border-black rounded-lg shadow-xl overflow-hidden cursor-pointer ${!tToolUnlocked ? 'hover:border-yellow-500' : 'hover:border-blue-500'}`}
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
                ? (blueCheckUnlocked
                  ? (language === 'zh' ? '✅ KOL' : '✅ KOL')
                  : (language === 'zh' ? '已解锁' : 'Unlocked'))
                : (language === 'zh' ? '点击购买' : 'Click to Buy')}
            </div>
          </div>
        </div>
      </div>

      {/* T-Tool 购买弹窗（未解锁时） */}
      {showBuyModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => !justPurchased && setShowBuyModal(false)}
        >
          <div
            className="bg-white border-4 border-black rounded-lg shadow-2xl p-4 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {justPurchased && purchaseType === 'ttool' ? (
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
                        ? '解锁 T-Tool，开启加密社交玩法！'
                        : 'Unlock T-Tool for crypto social features!'}
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
                    <span className={`font-bold ${canAffordTTool ? 'text-profit' : 'text-loss'}`}>
                      ${balance.toFixed(2)}
                    </span>
                  </div>
                </div>

                {!canAffordTTool && (
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
                    onClick={handlePurchaseTTool}
                    disabled={!canAffordTTool}
                    className={`flex-1 py-2 text-xs border-2 border-black ${
                      canAffordTTool
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

      {/* T-Tool 信息弹窗（已解锁后点击） */}
      {showInfoModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => !justPurchased && setShowInfoModal(false)}
        >
          <div
            className="bg-white border-4 border-black rounded-lg shadow-2xl p-4 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {justPurchased && purchaseType === 'bluecheck' ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">🎉✅</div>
                <div className="text-sm font-bold">
                  {language === 'zh' ? '蓝标认证成功！' : 'Blue Check Verified!'}
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  {language === 'zh' ? 'KOL 玩法已解锁' : 'KOL Mode Unlocked'}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/t-tool-logo.jpg"
                    alt="T-tool"
                    className="w-16 h-16 object-cover border-4 border-blue-500 rounded"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <div>
                    <div className="text-sm font-bold flex items-center gap-1">
                      T-Tool
                      {blueCheckUnlocked && <span className="text-blue-500">✅</span>}
                    </div>
                    <div className="text-[10px] text-green-600 font-bold mt-1">
                      {language === 'zh'
                        ? '🎉 加密社交软件已解锁！'
                        : '🎉 Crypto Social App Unlocked!'}
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-3">
                  <div className="text-xs text-gray-600 leading-relaxed">
                    {language === 'zh'
                      ? '你已拥有加密社交软件 T-Tool！在这里你可以发布动态、关注其他交易者，打造你的加密圈子。'
                      : 'You now have T-Tool, the crypto social app! Post updates, follow other traders, and build your crypto circle.'}
                  </div>
                </div>

                {/* 蓝标认证区域 */}
                {!blueCheckUnlocked && (
                  <div className="mt-3 bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">✅</span>
                      <div className="text-xs font-bold text-blue-700">
                        {language === 'zh' ? '蓝标认证' : 'Blue Check Verification'}
                      </div>
                    </div>
                    <div className="text-[10px] text-blue-600 mb-2">
                      {language === 'zh'
                        ? '购买蓝标认证，成为 KOL！解锁粉丝系统、带货能力和更多玩法。'
                        : 'Get verified and become a KOL! Unlock fan system, influence power, and more.'}
                    </div>
                    <div className="flex justify-between text-xs mb-2">
                      <span>{language === 'zh' ? '认证费用' : 'Verification Fee'}:</span>
                      <span className="font-bold">${BLUE_CHECK_PRICE.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs mb-3">
                      <span>{language === 'zh' ? '当前余额' : 'Balance'}:</span>
                      <span className={`font-bold ${canAffordBlueCheck ? 'text-profit' : 'text-loss'}`}>
                        ${balance.toFixed(2)}
                      </span>
                    </div>

                    {!canAffordBlueCheck && (
                      <div className="mb-2 bg-red-100 border border-red-300 rounded p-1.5 text-center">
                        <div className="text-[10px] text-red-600 font-bold">
                          {language === 'zh' ? '余额不足！' : 'Insufficient Balance!'}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handlePurchaseBlueCheck}
                      disabled={!canAffordBlueCheck}
                      className={`w-full py-2 text-xs border-2 border-black rounded ${
                        canAffordBlueCheck
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {language === 'zh' ? '🔵 购买蓝标 $10,000' : '🔵 Buy Blue Check $10,000'}
                    </button>
                  </div>
                )}

                {blueCheckUnlocked && (
                  <div className="mt-3 bg-green-50 border-2 border-green-300 rounded-lg p-3 text-center">
                    <div className="text-xs font-bold text-green-700">
                      {language === 'zh'
                        ? '✅ 蓝标已认证 — KOL 玩法已开启！'
                        : '✅ Blue Check Verified — KOL Mode Active!'}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setShowInfoModal(false)}
                  className="w-full mt-4 bg-black text-white py-2 text-xs border-2 border-black hover:bg-gray-800"
                >
                  {language === 'zh' ? '关闭' : 'Close'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../i18n/LanguageContext';
import { getCurrentSECChair } from '../data/secChairs';

export default function SECChairPanel() {
  const { currentMonth } = useGameStore();
  const { language } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  
  const currentChair = getCurrentSECChair(currentMonth);
  
  const profitText = currentChair.profitModifier >= 0 
    ? `+${currentChair.profitModifier}%` 
    : `${currentChair.profitModifier}%`;
  
  const lossText = currentChair.lossModifier >= 0 
    ? `+${currentChair.lossModifier}%` 
    : `${currentChair.lossModifier}%`;

  return (
    <>
      <div className="w-24 sm:w-32 relative group">
        <div className="bg-white border-2 sm:border-4 border-black rounded-lg shadow-xl overflow-hidden">
          {/* 标题 */}
          <div className="bg-red-600 text-white text-center py-0.5 sm:py-1 border-b-2 sm:border-b-4 border-black">
            <div className="text-[8px] sm:text-xs font-bold leading-tight">
              {language === 'zh' ? 'SEC' : 'SEC'}
            </div>
          </div>
          
          {/* 头像 - 可点击（移动端）/ 可悬停（PC端） */}
          <div 
            className="p-1 sm:p-2 bg-gray-100 cursor-pointer"
            onClick={() => setShowDetails(true)}
          >
            <img 
              src={currentChair.avatar} 
              alt={currentChair.name[language]}
              className="w-full aspect-square object-cover border-2 sm:border-4 border-black rounded"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          
          {/* 名字 */}
          <div className="p-1 bg-white border-t-2 sm:border-t-4 border-black">
            <div className="text-[7px] sm:text-xs font-bold text-center truncate leading-tight">
              {currentChair.name[language].split(' ')[0]}
            </div>
          </div>
          
          {/* PC端悬停详情 */}
          <div className="hidden sm:block absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <div className="bg-white border-4 border-black rounded-lg shadow-2xl p-3 w-56">
              <div className="text-sm font-bold mb-2">{currentChair.name[language]}</div>
              <div className="text-xs text-gray-600 mb-3 leading-relaxed">
                {currentChair.description[language]}
              </div>
              <div className="space-y-2 border-t-2 border-gray-300 pt-2">
                <div className="flex justify-between text-xs">
                  <span>{language === 'zh' ? '收益修正' : 'Profit Mod'}:</span>
                  <span className={currentChair.profitModifier >= 0 ? 'text-profit font-bold' : 'text-loss font-bold'}>
                    {profitText}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>{language === 'zh' ? '亏损修正' : 'Loss Mod'}:</span>
                  <span className={currentChair.lossModifier >= 0 ? 'text-loss font-bold' : 'text-profit font-bold'}>
                    {lossText}
                  </span>
                </div>
                <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-300">
                  {language === 'zh' ? '任期' : 'Term'}: {Math.floor((currentMonth - 1) / 12) * 12 + 1}-{Math.floor((currentMonth - 1) / 12) * 12 + 12}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 移动端详情弹窗 */}
      {showDetails && (
        <div 
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowDetails(false)}
        >
          <div 
            className="bg-white border-4 border-black rounded-lg shadow-2xl p-4 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={currentChair.avatar} 
                alt={currentChair.name[language]}
                className="w-16 h-16 object-cover border-4 border-black rounded"
                style={{ imageRendering: 'pixelated' }}
              />
              <div>
                <div className="text-sm font-bold">{currentChair.name[language]}</div>
                <div className="text-[10px] text-gray-600 mt-1">
                  {currentChair.description[language]}
                </div>
              </div>
            </div>
            
            <div className="space-y-2 border-t-2 border-gray-300 pt-3">
              <div className="flex justify-between text-xs">
                <span>{language === 'zh' ? '收益修正' : 'Profit Modifier'}:</span>
                <span className={currentChair.profitModifier >= 0 ? 'text-profit font-bold' : 'text-loss font-bold'}>
                  {profitText}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span>{language === 'zh' ? '亏损修正' : 'Loss Modifier'}:</span>
                <span className={currentChair.lossModifier >= 0 ? 'text-loss font-bold' : 'text-profit font-bold'}>
                  {lossText}
                </span>
              </div>
              <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-300">
                {language === 'zh' ? '任期' : 'Term'}: {Math.floor((currentMonth - 1) / 12) * 12 + 1}-{Math.floor((currentMonth - 1) / 12) * 12 + 12}
              </div>
            </div>
            
            <button
              onClick={() => setShowDetails(false)}
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

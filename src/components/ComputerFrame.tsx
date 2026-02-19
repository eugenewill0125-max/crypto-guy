import { ReactNode } from 'react';
import SECChairPanel from './SECChairPanel';

interface ComputerFrameProps {
  children: ReactNode;
}

export default function ComputerFrame({ children }: ComputerFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex flex-col items-center justify-center p-2 sm:p-4 gap-2 sm:gap-4">
      {/* SEC 主席面板 - 顶部右侧 */}
      <div className="w-full max-w-4xl flex justify-end items-start">
        <SECChairPanel />
      </div>
      
      {/* 桌面场景容器 */}
      <div className="relative w-full max-w-4xl">
        {/* 显示器 */}
        <div className="relative bg-gray-800 border-4 sm:border-8 border-gray-900 rounded-lg shadow-2xl">
          {/* 显示器边框 */}
          <div className="bg-gray-300 p-2 sm:p-3 rounded-t-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="ml-2 text-xs text-gray-700 font-pixel hidden sm:block">CRYPTO GUY</div>
            </div>
          </div>
          
          {/* 屏幕内容区域 */}
          <div className="bg-primary p-1 sm:p-2 relative">
            <div className="bg-black border-2 sm:border-4 border-gray-600 rounded overflow-hidden relative">
              {/* 扫描线效果 */}
              <div className="absolute inset-0 pointer-events-none z-10 opacity-10">
                <div className="scan-line absolute inset-x-0 h-1 bg-white"></div>
              </div>
              
              <div className="bg-primary overflow-y-auto relative z-0" style={{ maxHeight: '70vh' }}>
                {children}
              </div>
            </div>
          </div>

          {/* 显示器底座 */}
          <div className="bg-gray-800 h-6 sm:h-8 flex items-center justify-center">
            <div className="w-12 sm:w-16 h-2 sm:h-3 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* 键盘 - 隐藏在小屏幕 */}
        <div className="mt-3 sm:mt-4 bg-gray-700 border-2 sm:border-4 border-gray-900 rounded-lg p-2 sm:p-3 shadow-xl hidden md:block">
          <div className="grid grid-cols-12 gap-1">
            {/* 第一排 */}
            {[...Array(12)].map((_, i) => (
              <div key={`row1-${i}`} className="bg-gray-600 border-2 border-gray-500 rounded h-6"></div>
            ))}
            {/* 第二排 */}
            {[...Array(12)].map((_, i) => (
              <div key={`row2-${i}`} className="bg-gray-600 border-2 border-gray-500 rounded h-6"></div>
            ))}
            {/* 第三排 */}
            {[...Array(12)].map((_, i) => (
              <div key={`row3-${i}`} className="bg-gray-600 border-2 border-gray-500 rounded h-6"></div>
            ))}
            {/* 空格键 */}
            <div className="col-span-8 col-start-3 bg-gray-600 border-2 border-gray-500 rounded h-6"></div>
          </div>
        </div>

        {/* 鼠标 - 隐藏在小屏幕 */}
        <div className="hidden lg:block absolute -right-20 bottom-16 mouse-wobble">
          <div className="relative w-16 h-20 bg-gray-700 border-4 border-gray-900 rounded-t-full rounded-b-lg shadow-xl">
            {/* 滚轮 */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gray-600 border-2 border-gray-800 rounded-full"></div>
            {/* 左键 */}
            <div className="absolute top-2 left-2 w-5 h-12 bg-gray-600 border-2 border-gray-800 rounded-t-full"></div>
            {/* 右键 */}
            <div className="absolute top-2 right-2 w-5 h-12 bg-gray-600 border-2 border-gray-800 rounded-t-full"></div>
            {/* 鼠标线 */}
            <div className="absolute -top-8 left-1/2 w-1 h-8 bg-gray-800"></div>
          </div>
        </div>

        {/* 装饰性咖啡杯 - 隐藏在小屏幕 */}
        <div className="hidden lg:block absolute -left-20 bottom-20">
          <div className="relative">
            {/* 杯子 */}
            <div className="w-12 h-14 bg-white border-4 border-gray-900 rounded-b-lg">
              <div className="mt-2 mx-2 h-8 bg-amber-700 rounded-b-lg"></div>
            </div>
            {/* 手柄 */}
            <div className="absolute right-0 top-3 w-4 h-8 border-4 border-gray-900 rounded-r-full border-l-0"></div>
            {/* 蒸汽 */}
            <div className="absolute -top-4 left-2 text-gray-400 text-xs steam">~</div>
            <div className="absolute -top-6 left-4 text-gray-400 text-xs steam" style={{ animationDelay: '0.3s' }}>~</div>
            <div className="absolute -top-5 left-6 text-gray-400 text-xs steam" style={{ animationDelay: '0.6s' }}>~</div>
          </div>
        </div>
      </div>
    </div>
  );
}

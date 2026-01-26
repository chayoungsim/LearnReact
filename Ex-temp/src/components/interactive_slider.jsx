import React, { useState } from 'react';
import { Palette } from 'lucide-react';

export default function InteractiveSlider() {
  const [value1, setValue1] = useState(40);
  const [value2, setValue2] = useState(75);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="border-2 border-dashed border-purple-400 rounded-2xl p-12 bg-gray-800 bg-opacity-50 backdrop-blur-sm">
          {/* 헤더 */}
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-sm transform rotate-45"></div>
              <span className="text-purple-400 font-medium">slider</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <Palette className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* 슬라이더 컨테이너 */}
          <div className="space-y-10">
            {/* 첫 번째 슬라이더 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-emerald-400 text-sm font-medium">Volume</span>
                <span className="text-white text-lg font-semibold">{value1}%</span>
              </div>
              <div className="relative h-2 bg-gray-600 rounded-full">
                <div 
                  className="absolute h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-150"
                  style={{ width: `${value1}%` }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value1}
                  onChange={(e) => setValue1(Number(e.target.value))}
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg cursor-pointer transition-all duration-150 hover:scale-110 active:scale-95"
                  style={{ left: `calc(${value1}% - 16px)` }}
                >
                  <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>

            {/* 두 번째 슬라이더 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-emerald-400 text-sm font-medium">Brightness</span>
                <span className="text-white text-lg font-semibold">{value2}%</span>
              </div>
              <div className="relative h-2 bg-gray-600 rounded-full">
                <div 
                  className="absolute h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-150"
                  style={{ width: `${value2}%` }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value2}
                  onChange={(e) => setValue2(Number(e.target.value))}
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg cursor-pointer transition-all duration-150 hover:scale-110 active:scale-95"
                  style={{ left: `calc(${value2}% - 16px)` }}
                >
                  <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 정보 */}
          <div className="mt-12 pt-6 border-t border-purple-400 border-opacity-30">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-gray-400 text-xs mb-1">총 조정 범위</div>
                <div className="text-white text-xl font-bold">0-100</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">현재 평균값</div>
                <div className="text-emerald-400 text-xl font-bold">
                  {Math.round((value1 + value2) / 2)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
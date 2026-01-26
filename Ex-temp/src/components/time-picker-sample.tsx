import React, { useState } from 'react';
import { Clock } from 'lucide-react';

export default function TimePickerSample() {
  const [selectedHour, setSelectedHour] = useState(7);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [isPM, setIsPM] = useState(false);
  const [isSelectingHour, setIsSelectingHour] = useState(true);

  const hours = Array.from({ length: 12 }, (_, i) => i === 0 ? 12 : i);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  const handleClockClick = (value) => {
    if (isSelectingHour) {
      setSelectedHour(value);
      setIsSelectingHour(false);
    } else {
      setSelectedMinute(value);
    }
  };

  const getClockPosition = (index, total) => {
    const angle = (index * 360) / total - 90;
    const radius = 120;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const getHandAngle = () => {
    if (isSelectingHour) {
      return ((selectedHour % 12) * 30) - 90;
    } else {
      return (selectedMinute * 6) - 90;
    }
  };

  const handAngle = getHandAngle();
  const handLength = 100;
  const handX = handLength * Math.cos((handAngle * Math.PI) / 180);
  const handY = handLength * Math.sin((handAngle * Math.PI) / 180);

  const formatTime = () => {
    const hour = selectedHour.toString().padStart(2, '0');
    const minute = selectedMinute.toString().padStart(2, '0');
    return `${hour}:${minute}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-xl text-gray-700 mb-6 font-medium">시간 선택</h2>
        
        {/* Time Display */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setIsSelectingHour(true)}
            className={`text-5xl font-light px-4 py-2 rounded-lg transition-colors ${
              isSelectingHour ? 'bg-teal-100 text-teal-600' : 'text-gray-400'
            }`}
          >
            {selectedHour.toString().padStart(2, '0')}
          </button>
          <span className="text-4xl text-gray-800">:</span>
          <button
            onClick={() => setIsSelectingHour(false)}
            className={`text-5xl font-light px-4 py-2 rounded-lg transition-colors ${
              !isSelectingHour ? 'bg-gray-100 text-gray-800' : 'text-gray-400'
            }`}
          >
            {selectedMinute.toString().padStart(2, '0')}
          </button>
          <div className="flex flex-col gap-2 ml-2">
            <button
              onClick={() => setIsPM(false)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                !isPM ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              오전
            </button>
            <button
              onClick={() => setIsPM(true)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                isPM ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              오후
            </button>
          </div>
        </div>

        {/* Clock Face */}
        <div className="relative w-80 h-80 mx-auto bg-gray-50 rounded-full mb-8">
          <svg className="w-full h-full" viewBox="-150 -150 300 300">
            {/* Clock Hand */}
            <line
              x1="0"
              y1="0"
              x2={handX}
              y2={handY}
              stroke="#14b8a6"
              strokeWidth="2"
            />
            <circle cx={handX} cy={handY} r="4" fill="#14b8a6" />
            
            {/* Center Dot */}
            <circle cx="0" cy="0" r="30" fill="#14b8a6" />
            <text
              x="0"
              y="8"
              textAnchor="middle"
              fill="white"
              fontSize="24"
              fontWeight="300"
            >
              {isSelectingHour ? selectedHour : selectedMinute}
            </text>

            {/* Numbers */}
            {(isSelectingHour ? hours : minutes).map((value, index) => {
              const pos = getClockPosition(index, isSelectingHour ? 12 : 12);
              const isSelected = isSelectingHour 
                ? value === selectedHour 
                : value === selectedMinute;
              
              return (
                <g key={value}>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="20"
                    fill={isSelected ? '#14b8a6' : 'transparent'}
                    className="cursor-pointer hover:fill-teal-100 transition-colors"
                    onClick={() => handleClockClick(value)}
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 6}
                    textAnchor="middle"
                    fill={isSelected ? 'white' : '#374151'}
                    fontSize="16"
                    className="cursor-pointer pointer-events-none select-none"
                  >
                    {value}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Clock size={24} />
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setSelectedHour(7);
                setSelectedMinute(0);
                setIsPM(false);
                setIsSelectingHour(true);
              }}
              className="text-teal-500 hover:text-teal-600 font-medium transition-colors"
            >
              취소
            </button>
            <button
              onClick={() => {
                alert(`선택된 시간: ${isPM ? '오후' : '오전'} ${formatTime()}`);
              }}
              className="text-teal-500 hover:text-teal-600 font-medium transition-colors"
            >
              확인
            </button>
          </div>
        </div>

        {/* Selected Time Display */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          선택된 시간: {isPM ? '오후' : '오전'} {formatTime()}
        </div>
      </div>
    </div>
  );
}
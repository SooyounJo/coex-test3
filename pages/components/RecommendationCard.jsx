import React from 'react';

const RecommendationCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mx-auto mt-8 mb-4 max-w-sm overflow-hidden flex flex-col justify-between" style={{ height: '70vh' }}>
      <div className="flex-grow overflow-y-auto custom-scrollbar">
        <p className="text-gray-800 text-lg mb-4">
          가족이라면 코엑스 옆에 있는 '봉은사'를
          <br />
          추천해요.
        </p>
        <p className="text-gray-600 text-md mb-6">
          도심 속 사찰이라 잠깐 여유롭게 쉬어가기
          <br />
          좋아요.
        </p>

        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img
            src="/QA_Imgs/8-2_3.png" // This image needs to be present in the public/QA_Imgs directory
            alt="봉은사"
            className="w-full h-auto object-cover"
          />
          <button className="absolute top-4 right-4 bg-white bg-opacity-80 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow">
            봉은사 위치 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h12.75a.75.75 0 00.75-.75V10.5m-13.5-4H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;

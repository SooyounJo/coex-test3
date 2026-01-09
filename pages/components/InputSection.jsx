import React from 'react';

const InputSection = () => {
  return (
    <div className="w-full max-w-sm relative mb-4">
      <input
        type="text"
        placeholder="메시지를 입력하세요..."
        className="w-full pl-12 pr-4 py-3 rounded-full bg-white bg-opacity-90 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-lg">
        N
      </div>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a5.25 5.25 0 005.25-5.25V6.75a5.25 5.25 0 00-10.5 0v6.75a5.25 5.25 0 005.25 5.25zm-2.25-6.75h4.5m-4.5 0v-.75m4.5 0v-.75m-4.5 0H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5m-1.5 12H12m-3 0h7.5V1.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputSection;

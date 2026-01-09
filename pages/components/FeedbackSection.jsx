import React from 'react';

const FeedbackSection = () => {
  return (
    <div className="w-full max-w-sm">
      <p className="text-gray-700 mb-4 text-center">추천이 적절했나요?</p>
      <div className="flex justify-around space-x-2">
        <button className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-gray-200">
          조금 아쉬워요
        </button>
        <button className="flex-1 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-purple-200">
          잘 맞아요
        </button>
      </div>
    </div>
  );
};

export default FeedbackSection;

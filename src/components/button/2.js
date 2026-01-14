import React, { useState } from 'react';

/**
 * 2. 피드백 버튼 세트 (조금 아쉬워요 / 잘 맞아요)
 * 3색 연보라 그라데이션 + 글래스모피즘
 */
const FeedbackButtons = ({ onFeedback }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (type) => {
    if (selected) return;
    setSelected(type);
    if (onFeedback) onFeedback(type);
  };

  const getButtonStyle = (isSelected) => ({
    borderRadius: '24px',
    border: '1px solid #D2D2FC',
    background: isSelected
      ? 'linear-gradient(131deg, rgba(255, 255, 255, 0.30) 13.16%, rgba(223, 223, 255, 0.78) 71.01%)'
      : 'linear-gradient(131deg, rgba(255, 255, 255, 0.25) 13.16%, rgba(230, 210, 255, 0.55) 50%, rgba(223, 223, 255, 0.65) 71.01%)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 9.1px 0 rgba(166, 166, 166, 0.2)',
    backdropFilter: 'blur(16px) saturate(1.4)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
    padding: '5px 16px',
    cursor: selected ? 'default' : 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const textStyle = {
    fontFamily: 'Pretendard Variable, -apple-system, sans-serif',
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.6px',
    color: 'rgba(112, 60, 161, 0.70)',
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button 
        style={getButtonStyle(selected === 'negative')} 
        onClick={() => handleSelect('negative')}
      >
        <span style={textStyle}>조금 아쉬워요</span>
      </button>
      <button 
        style={getButtonStyle(selected === 'positive')} 
        onClick={() => handleSelect('positive')}
      >
        <span style={textStyle}>잘 맞아요</span>
      </button>
    </div>
  );
};

export default FeedbackButtons;


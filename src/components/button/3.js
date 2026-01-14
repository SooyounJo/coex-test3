import React from 'react';

/**
 * 3. 이런 방향으로 계속 추천 버튼
 * 단일 버튼 + 줄바꿈 지원
 */
const ContinueRecommendationButton = ({ onClick, label = "이런 방향으로\n계속 추천" }) => {
  const buttonStyle = {
    borderRadius: '24px',
    border: '1px solid #D2D2FC',
    background: 'linear-gradient(131deg, rgba(255, 255, 255, 0.25) 13.16%, rgba(230, 210, 255, 0.55) 50%, rgba(223, 223, 255, 0.65) 71.01%)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 9.1px 0 rgba(166, 166, 166, 0.2)',
    backdropFilter: 'blur(16px) saturate(1.4)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
    padding: '5px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    height: 'auto',
    minHeight: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    outline: 'none',
  };

  const textStyle = {
    fontFamily: 'Pretendard Variable, -apple-system, sans-serif',
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.6px',
    color: 'rgba(112, 60, 161, 0.70)',
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <span style={textStyle}>{label}</span>
    </button>
  );
};

export default ContinueRecommendationButton;


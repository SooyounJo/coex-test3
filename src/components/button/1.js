import React from 'react';

/**
 * 1. 매장 정보 보기 버튼
 * 글래스모피즘 + 오버레이 블렌드 모드 적용
 */
const StoreInfoButton = ({ href, label = "매장 정보 보기" }) => {
  const wrapperStyle = {
    display: 'inline-flex',
    padding: '6px 12px',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '99px',
    background: 'linear-gradient(135deg, rgba(80, 60, 90, 0.08) 0%, rgba(70, 50, 80, 0.06) 100%)',
    border: 'none',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 3px rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(16px) saturate(1.2)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
    mixBlendMode: 'overlay',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const textStyle = {
    color: 'rgba(255, 255, 255, 0.75)',
    textAlign: 'center',
    fontFamily: 'Pretendard Variable, -apple-system, sans-serif',
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.36px',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.12)',
  };

  const iconStyle = {
    width: '12px',
    height: '12px',
    filter: 'brightness(0) invert(1)',
    opacity: 0.8,
  };

  return (
    <a href={href} style={wrapperStyle} target="_blank" rel="noopener noreferrer">
      <span style={textStyle}>{label}</span>
      <img 
        src="https://img.icons8.com/material-rounded/24/000000/chevron-right.png" 
        alt="arrow" 
        style={iconStyle} 
      />
    </a>
  );
};

export default StoreInfoButton;


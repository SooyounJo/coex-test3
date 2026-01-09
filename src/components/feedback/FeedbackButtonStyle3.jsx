/**
 * 피드백 버튼 스타일 3: 이미지 2 속의 단색 버튼
 */
import React from 'react';

export const getFeedbackButtonStyle3 = (isSelected) => ({
  borderRadius: '24px',
  border: '1px solid rgba(200, 180, 230, 0.4)',
  background: isSelected
    ? 'rgba(240, 230, 255, 0.6)'
    : 'rgba(240, 230, 255, 0.45)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 9.1px 0 rgba(166, 166, 166, 0.2)',
  backdropFilter: 'blur(16px) saturate(1.4)',
  WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
  padding: '8px 16px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
});

export const getFeedbackButtonTextStyle3 = () => ({
  fontFamily: 'Pretendard Variable',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '140%',
  letterSpacing: '-0.6px',
  color: 'rgba(112, 60, 161, 0.70)',
});


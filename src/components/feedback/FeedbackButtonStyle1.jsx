/**
 * 피드백 버튼 스타일 1: 현재 형태 (3색 그라데이션)
 */
import React from 'react';

export const getFeedbackButtonStyle1 = (isSelected) => ({
  borderRadius: '24px',
  border: '1px solid #D2D2FC',
  background: isSelected
    ? 'linear-gradient(131deg, rgba(255, 255, 255, 0.30) 13.16%, rgba(223, 223, 255, 0.78) 71.01%)'
    : 'linear-gradient(131deg, rgba(255, 255, 255, 0.25) 13.16%, rgba(230, 210, 255, 0.55) 50%, rgba(223, 223, 255, 0.65) 71.01%)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 9.1px 0 rgba(166, 166, 166, 0.2)',
  backdropFilter: 'blur(16px) saturate(1.4)',
  WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
  padding: '5px 16px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
});

export const getFeedbackButtonTextStyle1 = () => ({
  fontFamily: 'Pretendard Variable',
  fontSize: '11px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '140%',
  letterSpacing: '-0.6px',
  color: 'rgba(112, 60, 161, 0.70)',
});


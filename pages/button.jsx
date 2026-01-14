import React from 'react';
import StoreInfoButton from '../src/components/button/1';
import FeedbackButtons from '../src/components/button/2';
import ContinueRecommendationButton from '../src/components/button/3';

const ButtonTestPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2e1a47 0%, #1a102e 100%)', // 실제 앱 배경과 유사한 톤
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '50px'
    }}>
      <h1 style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', opacity: 0.8 }}>Button Component Sync Test</h1>

      {/* 1번 버튼 테스트 */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '15px' }}>1. 매장 정보 보기 (StoreInfoButton)</p>
        <StoreInfoButton href="#" />
      </div>

      {/* 2번 버튼 테스트 */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '15px' }}>2. 피드백 버튼 세트 (FeedbackButtons)</p>
        <FeedbackButtons onFeedback={(type) => console.log('Feedback:', type)} />
      </div>

      {/* 3번 버튼 테스트 */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '15px' }}>3. 계속 추천 버튼 (ContinueRecommendationButton)</p>
        <ContinueRecommendationButton onClick={() => alert('Clicked!')} />
      </div>

      <div style={{ marginTop: '40px', color: '#fff', opacity: 0.5, fontSize: '11px' }}>
        All buttons are set to 11px font size.
      </div>
    </div>
  );
};

export default ButtonTestPage;


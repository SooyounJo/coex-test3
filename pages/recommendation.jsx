'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { ChatBubble } from '@/components/ChatBubble';
import { createAssistantMessage } from '@/lib/messageUtils';
import { CanvasBackground } from '@/components/ui/BlobBackgroundV2Canvas';
import { fixedQAData, CHIP_PARAPHRASING } from '@/components/main-page/v1/constants/fixedQAData';
import GradualBlur from '@/components/ui/GradualBlur';

const RecommendationPage = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const scrollContainerRef = useRef(null);
  const chipText = CHIP_PARAPHRASING.family[0]; // "가족끼리"

  const message = useMemo(() => {
    // fixedQAData[8]는 "유명 스팟" (9번째 항목)
    // answers[1]은 LED 스크린 추천
    const ledScreenData = fixedQAData[8].answers[1];
    const text = ledScreenData.textTemplate.replaceAll("{chip}", chipText);

    return createAssistantMessage({
      answer: text,
      thumbnailUrl: ledScreenData.image,
      siteUrl: ledScreenData.url,
      linkText: ledScreenData.linkText,
    });
  }, [chipText]);



  // 스크롤 위치에 따라 블러 opacity 조정
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const scrollTop = scrollContainerRef.current.scrollTop;
      const fadeStart = 0;
      const fadeEnd = 200; // 200px 스크롤하면 완전히 사라짐
      
      if (scrollTop <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrollTop >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        // 0 ~ 200px 사이에서 선형적으로 fade out
        const opacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        setScrollOpacity(Math.max(0, Math.min(1, opacity)));
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // 초기값 설정
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div 
      className={`min-h-screen flex flex-col safe-area-inset overscroll-contain relative v10-main-page`} 
      style={{ overflowX: 'hidden', overflowY: 'auto', height: '100vh' }}
    >
      {/* 배경 blob - MainPageV1과 동일 */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at 30% 25%, #fdf0f6 0%, #fce6ef 45%, #f7d7e4 100%)',
        }}
      >
        <CanvasBackground 
          boosted={false} 
          phase="idle" 
          popActive={true} 
          hideTopBlob={false} 
          hideBottomBlob={true} 
          customTopScale={2}
          customCameraFov={50}
        />
      </div>

      <main className="relative flex-1 flex flex-col min-h-0 pt-20" style={{ background: 'transparent', paddingBottom: 0, position: 'relative', overflow: 'hidden' }}>
        <div className="flex-1 overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="h-full overflow-y-auto overflow-x-visible px-4 pb-4 space-y-4 overscroll-contain scrollbar-hide" 
            style={{ minHeight: '100vh', paddingBottom: 'calc(1rem + 60px)', paddingTop: '40px' }}
          >
            <div 
              style={{
                opacity: 1,
                paddingBottom: '25%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              {/* 첫 번째 모달 */}
              <div
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out 0ms forwards`,
                }}
              >
                <ChatBubble 
                  message={message} 
                  isThinking={false}
                  onPlayTTS={() => {}}
                  isPlayingTTS={false}
                  isGlobalLoading={false}
                  typewriterVariant="v1"
                  isFirstAnswer={true}
                  feedbackButtonStyle={1}
                />
              </div>
              
              {/* 두 번째 모달 (50px 아래) */}
              <div
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out 0ms forwards`,
                  marginTop: '50px',
                }}
              >
                <ChatBubble 
                  message={message} 
                  isThinking={false}
                  onPlayTTS={() => {}}
                  isPlayingTTS={false}
                  isGlobalLoading={false}
                  typewriterVariant="v1"
                  isFirstAnswer={true}
                  feedbackButtonStyle={1}
                  customFeedbackText={"이런 답변을 원하시는 군요.\n비슷한 답변을 생각해 볼게요!"}
                  customButtonText={"이런 방향으로\n계속 추천"}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 상단 그라데이션 블러 효과 (스크롤에 따라 점차 사라짐) */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            opacity: scrollOpacity,
            transition: 'opacity 0.1s ease-out',
            pointerEvents: 'none',
          }}
        >
          <GradualBlur
            target="page"
            position="top"
            height="4rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
            bgColor="linear-gradient(180deg, rgba(230, 220, 255, 0.5) 0%, rgba(220, 210, 255, 0.35) 40%, rgba(210, 200, 245, 0.2) 70%, transparent 100%)"
          />
        </div>
      </main>
      <style jsx>{`
        .v10-main-page {
          background: transparent;
          overflow-x: hidden;
          overflow-y: auto;
          height: 100vh;
          --v10-pulse-0: #fff2fb;
          --v10-pulse-1: #f3e2f7;
          --v10-pulse-2: #cfaedd;
          --v10-pulse-3: #a781c3;
        }

        @property --v10-pulse-0 { syntax: '<color>'; inherits: true; initial-value: #fff2fb; }
        @property --v10-pulse-1 { syntax: '<color>'; inherits: true; initial-value: #f3e2f7; }
        @property --v10-pulse-2 { syntax: '<color>'; inherits: true; initial-value: #cfaedd; }
        @property --v10-pulse-3 { syntax: '<color>'; inherits: true; initial-value: #a781c3; }
        
        .v10-main-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          opacity: 0;
          background:
            linear-gradient(90deg,
              rgba(64, 20, 104, 0.10) 0%,
              rgba(64, 20, 104, 0.06) 34%,
              rgba(64, 20, 104, 0.00) 68%,
              rgba(64, 20, 104, 0.00) 100%),
            linear-gradient(180deg,
              rgba(255, 230, 248, 0.14) 0%,
              rgba(236, 246, 255, 0.06) 32%,
              rgba(255, 255, 255, 0.00) 60%),
            radial-gradient(140% 48% at 18% 108%,
              rgba(52, 18, 86, 0.00) 58%,
              rgba(52, 18, 86, 0.08) 70%,
              rgba(52, 18, 86, 0.22) 82%,
              rgba(52, 18, 86, 0.34) 100%),
            linear-gradient(168deg,
              rgba(52, 18, 86, 0.00) 0%,
              rgba(52, 18, 86, 0.00) 86%,
              rgba(52, 18, 86, 0.06) 88%,
              rgba(52, 18, 86, 0.36) 95%,
              rgba(52, 18, 86, 0.54) 100%),
            radial-gradient(circle at 30% 20%,
              var(--v10-pulse-0) 0%,
              var(--v10-pulse-1) 32%,
              var(--v10-pulse-2) 78%,
              var(--v10-pulse-3) 100%);
          background-repeat: no-repeat;
          background-size: auto, auto, 160% 140%, 140% 140%, auto;
          background-position: 0 0, 0 0, 45% 100%, 50% 100%, 0 0;
          filter: saturate(1.22) brightness(1.03);
          animation:
            v10PinkPulse 9s ease-in-out infinite,
            v10PulseTintCycle 20s ease-in-out infinite,
            v10BottomDrift 6.5s ease-in-out infinite;
          will-change: opacity, filter, background-position;
        }
        
        .v10-main-page > :global(.coex-v2-canvas-wrapper) {
          z-index: 0 !important;
        }
        
        .v10-main-page > :global(.test-coex-v2-host) {
          z-index: 0;
        }
        
        .v10-main-page.is-thinking > :global(.coex-v2-canvas-wrapper),
        .v10-main-page.is-thinking :global(.coex-v2-canvas-wrapper),
        .v10-main-page.is-thinking :global(.coex-v2-host .coex-v2-canvas-wrapper) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        .v10-main-page.is-thinking :global(.coex-v2-host),
        body:has(.v10-main-page.is-thinking) :global(.coex-v2-host) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        @keyframes v10PinkPulse {
          0%, 100% { opacity: 0; }
          45%, 55% { opacity: 0.58; }
        }

        @keyframes v10BottomDrift {
          0%, 100% {
            background-position: 0 0, 0 0, 45% 100%, 50% 100%, 0 0;
          }
          50% {
            background-position: 0 0, 0 0, 55% 100%, 46% 100%, 0 0;
          }
        }

        @keyframes v10PulseTintCycle {
          0%, 20% {
            --v10-pulse-0: #fff2fb;
            --v10-pulse-1: #f4e0f2;
            --v10-pulse-2: #d3b5e0;
            --v10-pulse-3: #b58fd0;
            filter: saturate(1.26) brightness(1.03);
          }
          25%, 45% {
            --v10-pulse-0: #fff6fd;
            --v10-pulse-1: #f8e9f6;
            --v10-pulse-2: #e6d0f0;
            --v10-pulse-3: #d1b7e6;
            filter: saturate(1.20) brightness(1.07);
          }
          50%, 70% {
            --v10-pulse-0: #f0fbff;
            --v10-pulse-1: #def3ff;
            --v10-pulse-2: #b6e6ff;
            --v10-pulse-3: #87cdf6;
            filter: saturate(1.26) brightness(1.05);
          }
          75%, 95% {
            --v10-pulse-0: #f6fdff;
            --v10-pulse-1: #eaf8ff;
            --v10-pulse-2: #d2f0ff;
            --v10-pulse-3: #a9dfff;
            filter: saturate(1.16) brightness(1.08);
          }
          100% {
            --v10-pulse-0: #fff2fb;
            --v10-pulse-1: #f4e0f2;
            --v10-pulse-2: #d3b5e0;
            --v10-pulse-3: #b58fd0;
            filter: saturate(1.26) brightness(1.03);
          }
        }
        
        @keyframes slideInFadeInOut {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          12.5% {
            transform: translateX(0);
            opacity: 1;
          }
          87.5% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        .fifth-answer-warning {
          animation: slideInFadeInOut 4s ease-in-out forwards;
        }
        
        :global(.mic-btn) {
          padding: 12px 16px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          cursor: default;
          -webkit-tap-highlight-color: transparent;
          isolation: isolate;
        }

        :global(.mic-white-glass) {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 36px;
          height: 36px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          z-index: 0;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.34);
          border: 1px solid rgba(255, 255, 255, 0.62);
          box-shadow: 0 18px 34px rgba(22, 42, 58, 0.10);
          backdrop-filter: blur(16px) saturate(1.15);
          -webkit-backdrop-filter: blur(16px) saturate(1.15);
        }

        :global(.mic-svg) {
          position: relative;
          z-index: 1;
          width: 16px;
          height: 22px;
          display: block;
          filter: drop-shadow(0 10px 18px rgba(31, 123, 255, 0.10));
        }
        
        .chips-wrap--behind {
        }
        .chip-label {
          display: inline-block;
          will-change: transform, opacity;
          animation: chipSwapIn 520ms cubic-bezier(0.16, 1.0, 0.3, 1) both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes chipSwapIn {
          0% {
            transform: translateY(var(--dy, -8px)) scale(0.985);
            opacity: 0.0;
          }
          60% {
            transform: translateY(1px) scale(1.035);
            opacity: 1;
          }
          100% {
            transform: translateY(0px) scale(1);
            opacity: 1;
          }
        }
        .chip-btn--fade {
          opacity: 0.48;
          filter: blur(0.5px);
        }
        
        /* 스크롤바 숨기기 */
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
        .v10-main-page {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        .v10-main-page::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default RecommendationPage;

# 페이지 및 라우트 목록

## 프론트엔드 페이지 (사용자 접근 가능)

### App Router (src/app)

| 경로 | 파일 | 설명 |
|------|------|------|
| `/` | `src/app/page.tsx` | 메인 페이지 (AppFlow 컴포넌트 렌더링) |
| `/test-thinking-blob` | `src/app/test-thinking-blob/page.tsx` | 테스트 페이지 (Thinking Blob 테스트용) |

### Pages Router (pages)

| 경로 | 파일 | 설명 |
|------|------|------|
| `/recommendation` | `pages/recommendation.jsx` | 추천 페이지 (모달 스크롤 테스트용) |

---

## AppFlow 내부 페이지 (컴포넌트 레벨)

`src/app/page.tsx`에서 `AppFlow` 컴포넌트가 렌더링되며, 내부적으로 다음 페이지들을 관리합니다:

| 페이지 | 컴포넌트 | 경로 | 설명 |
|--------|----------|------|------|
| **Landing** | `LandingPageV2` | `/` (내부 상태) | 랜딩 페이지 (시작 화면) |
| **Onboarding** | `OnboardingPage` | `/` (내부 상태) | 온보딩 페이지 (선택지: 가족/연인/친구/혼자) |
| **Main** | `MainPageV1` | `/` (내부 상태) | 메인 페이지 (AI 채팅 인터페이스) |
| **End/Summary** | `EndScreens` | `/` (내부 상태) | 종료/요약 페이지 |

**참고**: 이들은 실제 URL 경로가 아닌, `AppFlow` 컴포넌트의 내부 상태(`currentPage`)로 관리되는 페이지입니다.

---

## API 엔드포인트 (백엔드)

### 주요 API (사용자 상호작용)

| 경로 | 메서드 | 파일 | 설명 |
|------|--------|------|------|
| `/api/chat` | POST | `src/app/api/chat/route.ts` | AI 채팅 API (핵심) |
| `/api/stt` | POST | `src/app/api/stt/route.ts` | 음성-텍스트 변환 (STT) |
| `/api/tts` | POST | `src/app/api/tts/route.ts` | 텍스트-음성 변환 (TTS) |
| `/api/tts-rewrite` | POST | `src/app/api/tts-rewrite/route.ts` | TTS용 텍스트 재작성 |

### 세션 관리

| 경로 | 메서드 | 파일 | 설명 |
|------|--------|------|------|
| `/api/enter` | GET | `src/app/api/enter/route.ts` | 세션 시작 (접속 체크) |
| `/api/leave` | POST | `src/app/api/leave/route.ts` | 세션 종료 |
| `/api/heartbeat` | POST | `src/app/api/heartbeat/route.ts` | 세션 유지 (주기적 호출) |

### 데이터 로깅

| 경로 | 메서드 | 파일 | 설명 |
|------|--------|------|------|
| `/api/log-message` | POST | `src/app/api/log-message/route.ts` | 메시지 로깅 (Google Sheets) |
| `/api/log-chat` | POST | `src/app/api/log-chat/route.ts` | 채팅 로깅 |
| `/api/daily-conversation-count` | GET | `src/app/api/daily-conversation-count/route.ts` | 일일 대화 횟수 조회 |

### 데이터 처리

| 경로 | 메서드 | 파일 | 설명 |
|------|--------|------|------|
| `/api/google-sheets` | GET | `src/app/api/google-sheets/route.ts` | Google Sheets 데이터 로드 |
| `/api/pre-processing-for-embedding` | POST | `src/app/api/pre-processing-for-embedding/route.ts` | 임베딩 전처리 |
| `/api/query-with-embedding` | POST | `src/app/api/query-with-embedding/route.ts` | RAG 쿼리 (임베딩 검색) |

### 유틸리티

| 경로 | 메서드 | 파일 | 설명 |
|------|--------|------|------|
| `/api/health` | GET | `src/app/api/health/route.ts` | 서버 상태 확인 |
| `/api/extract-keywords` | POST | `src/app/api/extract-keywords/route.ts` | 키워드 추출 |
| `/api/summarize-question` | POST | `src/app/api/summarize-question/route.ts` | 질문 요약 |

---

## 로컬 개발 서버 접속 URL

기본 개발 서버 URL: `http://localhost:3000`

### 접속 가능한 페이지:

- **메인 페이지**: `http://localhost:3000/`
- **추천 페이지**: `http://localhost:3000/recommendation`
- **테스트 페이지**: `http://localhost:3000/test-thinking-blob`

### API 엔드포인트 예시:

- **Health Check**: `http://localhost:3000/api/health`
- **Chat API**: `http://localhost:3000/api/chat`
- **STT API**: `http://localhost:3000/api/stt`
- **TTS API**: `http://localhost:3000/api/tts`
- 등등...

---

## 전체 라우트 구조 요약

```
/                                    → AppFlow (Landing → Onboarding → Main → End)
/recommendation                      → 추천 페이지 (테스트용)
/test-thinking-blob                 → Thinking Blob 테스트 페이지
/api/chat                           → AI 채팅 API
/api/stt                            → 음성 인식 API
/api/tts                            → 음성 합성 API
/api/tts-rewrite                    → TTS 텍스트 재작성 API
/api/enter                          → 세션 시작
/api/leave                          → 세션 종료
/api/heartbeat                      → 세션 유지
/api/log-message                    → 메시지 로깅
/api/log-chat                       → 채팅 로깅
/api/daily-conversation-count       → 일일 대화 횟수
/api/google-sheets                  → Google Sheets 데이터
/api/pre-processing-for-embedding   → 임베딩 전처리
/api/query-with-embedding           → RAG 쿼리
/api/health                         → 서버 상태 확인
/api/extract-keywords               → 키워드 추출
/api/summarize-question             → 질문 요약
```


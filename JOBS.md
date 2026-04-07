# JOBS — homepic-landing

## 🔴 필수

### Supabase API 키 만료 이슈

- **상태**: ⏸️ 대기 (사용자 확인 필요)
- **담당**: devops
- **증상**: 이메일 사전등록 시 `401 Unauthorized` — "Invalid API key" 에러
- **원인**: Supabase 프로젝트 일시정지(Pause) 또는 API 키 변경 추정
- **할 일**:
  1. Supabase 대시보드에서 프로젝트 상태 확인 (Paused → Restore)
  2. Settings → API에서 anon key 확인
  3. 키 변경 시 `.env.local` + AWS Amplify 환경변수 둘 다 업데이트
  4. 재배포 후 사전등록 동작 확인
- **관련 파일**: `.env.local`, `src/app/lib/supabase.ts`, `src/app/components/EmailForm.tsx`

## ✅ 완료

### 이용약관·개인정보처리방침 다국어 적용

- **커밋**: `002b4cc`
- **내용**: 두 페이지를 Server Component → Client Component로 전환, 6개 언어(en/ko/ja/zh/es/de) 번역 추가
- **파일**:
  - `src/app/i18n/termsTranslations.ts` (신규)
  - `src/app/i18n/privacyTranslations.ts` (신규)
  - `src/app/i18n/LanguageContext.tsx` (번역 병합)
  - `src/app/terms/page.tsx` (Client Component 변환)
  - `src/app/privacy/page.tsx` (Client Component 변환)

### 얼리버드 이벤트 배너 추가

- **커밋**: `ae3671f`

### 모바일 Hero 섹션 최적화

- **커밋**: `3ecebc6`

### 계정 삭제 안내 페이지 추가

- **커밋**: `8b9b12b`, `99a395d`

### 요금제 개편 — 리포트 무료화

- **커밋**: `add6c4a`

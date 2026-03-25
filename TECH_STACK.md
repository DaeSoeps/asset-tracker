# TECH_STACK.md

## 백엔드 (현재)
- 언어: Java 17
- 프레임워크: Spring Boot 3.x
- 빌드: Gradle Wrapper
- DB(개발): H2

## 프론트엔드 (확정)
- 언어: TypeScript
- 프레임워크: React 19
- 빌드 도구: Vite 8
- 패키지 매니저: pnpm
- 라우팅: React Router 7
- 서버 상태: TanStack Query v5
- 클라이언트 상태: Zustand
- 스타일링: Tailwind CSS + `@tailwindcss/vite`
- HTTP 클라이언트: axios
- 폼/검증: react-hook-form + zod + `@hookform/resolvers`
- 코드 포맷팅: Prettier

## 아키텍처
- 프론트엔드/백엔드 분리형 구조
- 프론트엔드는 SPA로 구성
- 백엔드는 Spring Boot REST API 제공
- 환경변수는 Vite 규칙(`VITE_`)을 따른다

## 형상관리 / 도구
- 버전관리: Git + GitHub
- 기본 브랜치: `main`

## 갱신 규칙
- 스택 변경 시 같은 커밋/PR에서 본 문서를 함께 수정

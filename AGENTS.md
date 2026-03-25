# AGENTS.md (asset-tracker)

## 범위
- 이 저장소는 풀스택 프로젝트 기준으로 운영한다.
- Git 루트: `C:\Users\dssong\Desktop\toyProjects\asset-tracker`
- 현재 백엔드 경로: `backend/asset-tracker-backend`
- 프론트엔드는 `frontend/` 경로에서 운영한다.

## 문서 정책
- 당분간 Markdown 문서는 Git에 커밋한다.
- 문서는 루트 또는 `docs/` 아래에 명확한 이름으로 저장한다.
- 규칙/프로세스가 바뀌면 같은 PR(또는 커밋)에서 이 문서를 함께 수정한다.
- 기술 스택 정보는 `TECH_STACK.md`에서 별도로 관리한다.

## 이슈 로그 정책
- 사용자 질문/요청 이슈는 모두 로그로 남긴다.
- 로그 폴더는 도메인별로 분리한다.
  - 프론트엔드: `issues/frontend/`
  - 백엔드: `issues/backend/`
- 파일명 규칙: `YYYY-MM-DD.md` (로컬 날짜 기준)
- 해당 날짜 파일이 있으면 항목을 추가하고, 없으면 새로 만든다.
- 항목 최소 필드:
  - 시간(Time)
  - 사용자 이슈(User Issue)
  - 조치(Action Taken)
  - 결과/상태(Result / Status)
- 기존 `issues/YYYY-MM-DD.md` 단일 로그는 레거시로 보관하고, 신규 로그부터 분리 정책을 적용한다.

## 작업 원칙
- 요청 범위를 벗어나는 리팩터링은 하지 않는다.
- 성능을 항상 우선 고려한다.
- 임시 코드(temporary code)는 금지한다.
- 방어 코드(defensive fallback code)는 금지한다.
- 설정/경로/빌드 문제는 코드 수정 전 설정 레벨에서 먼저 해결한다.
- 요구사항이 불명확하면 짧은 TODO를 남기고 확인한다.

## Git 원칙
- 기본 브랜치: `main`
- 모든 작업 브랜치는 항상 `main` 기준으로 생성한다.
- 기능 브랜치: `feature/<name>`
- 버그수정 브랜치: `fix/<name>`
- 머지 방향은 항상 `작업브랜치 -> main` 으로 한다.
- 머지 방향 표기 시 `main`은 항상 오른쪽(target)이다.

## 커밋 체크리스트
- 저장소 루트에서 `git status` 확인
- 의도한 파일만 스테이징
- 커밋 전 최소 점검 실행
  - 백엔드: build/test
  - 프론트엔드: lint/test/build (구성 이후)

## 제외/보안
- 비밀정보(토큰, 비밀번호, 키, `.env` 민감값)는 커밋 금지
- IDE/캐시/빌드 산출물은 필요 시를 제외하고 커밋 금지
- 재현 가능한 빌드에 필요한 생성물만 예외적으로 허용

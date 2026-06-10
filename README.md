# 오늘 뭐 마셔?

부경대학교 대연캠퍼스 주변 카페 음료 가격을 비교해서 최저가 순위로 보여주는 정적 웹 앱입니다. 설치 용량을 줄이기 위해 `npm`, 번들러, Firebase SDK를 쓰지 않고 브라우저 `fetch`로 Firebase Realtime Database REST API에 연결합니다.

## 파일 구성

- `index.html`: 앱 화면
- `styles.css`: 반응형 UI 스타일
- `app.js`: 랭킹, 상세, 가격 제보, 관리자 관리 로직
- `firebase-config.js`: Firebase 웹 앱 설정 입력 파일
- `database.rules.json`: Realtime Database 보안 규칙
- `seed-cafes.json`: `/cafes` 아래에 넣을 예시 카페 데이터
- `vercel.json`: Vercel 정적 배포 설정

## Firebase 설정

1. Firebase Console에서 `cafe-aef0b` 프로젝트를 엽니다.
2. 프로젝트 설정 > 일반 > 내 앱에서 웹 앱을 추가하고 Firebase config의 `apiKey`를 확인합니다.
3. `firebase-config.js`의 `apiKey`를 실제 값으로 바꿉니다.
4. Authentication > Sign-in method에서 이메일/비밀번호 로그인을 사용 설정합니다.
5. Authentication > Users에서 관리자 계정을 만들고 UID를 복사합니다.
6. Realtime Database > Data에서 아래 값을 직접 추가합니다.

```json
{
  "admins": {
    "여기에_관리자_UID": true
  }
}
```

7. Realtime Database > Rules에 `database.rules.json` 내용을 붙여 넣고 게시합니다.
8. Realtime Database > Data에서 `cafes` 노드를 만든 뒤, 그 노드를 선택한 상태로 `seed-cafes.json`을 가져옵니다.

`seed-cafes.json`은 예시 데이터입니다. 실제 운영 전에 직접 조사한 가격과 날짜로 수정하세요.

## GitHub에 올릴 때 주의

Firebase 웹 API key는 브라우저 앱에 공개되는 설정값입니다. 보안은 API key를 숨기는 것이 아니라 `database.rules.json` 같은 규칙으로 지켜야 합니다.

절대 올리지 말아야 할 것:

- 관리자 이메일/비밀번호
- Firebase service account JSON
- 개인 메모에 적어둔 비밀번호
- `.env` 파일

## Vercel 배포

1. GitHub에 이 프로젝트를 올립니다.
2. Vercel에서 New Project로 GitHub 저장소를 연결합니다.
3. Root Directory를 `cafe`로 설정합니다.
4. Framework Preset은 Other로 둡니다.
5. Build Command는 비워둡니다.
6. Output Directory는 `.`로 둡니다.

정적 파일만 배포하므로 별도 설치 과정이 없습니다.

## 운영 방식

- 일반 사용자는 `/cafes` 데이터를 읽고 음료별 최저가 랭킹을 봅니다.
- 가격 제보는 `/reports`에 `pending` 상태로 저장됩니다.
- 관리자는 로그인 후 제보를 확인하고, 반영 버튼으로 메뉴 가격을 수정합니다.
- 가격이 같은 경우 앱은 `distanceMinutes`가 작은 카페를 먼저 보여줍니다.
- 가격이 없는 메뉴는 "가격 정보 확인 필요"로 표시됩니다.

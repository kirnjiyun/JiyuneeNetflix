# Yunflix 🎬

**Yunflix**는 영화 및 TV 시리즈 추천 서비스로, 사용자가 원하는 주제나 감정에 맞춰 작품을 추천받을 수 있는 웹 애플리케이션입니다.  
TMDB API와 OpenAI를 활용해 실시간 데이터를 기반으로 한 맞춤형 추천을 제공하며, **React와 Node.js로 구축된 풀스택 프로젝트**입니다.

👉 **배포 링크**: [https://jiyunee-netflix.vercel.app](https://jiyunee-netflix.vercel.app)


## 📸 스크린샷

| 데스크탑 버전 | 모바일 버전 |
|:-------------:|:-----------:|
| <img src="https://github.com/user-attachments/assets/dc65373e-0bd2-4236-8c05-a9c9375e99b6" width="100%"> | <img src="https://github.com/user-attachments/assets/8f7e26d6-61ef-4384-95e8-8a5f2628dcf9" width="100%"> |
| <img src="https://github.com/user-attachments/assets/446b100b-8cfa-4f1d-813c-acb81ab248a6" width="100%"> | <img src="https://github.com/user-attachments/assets/f22faf1b-ba34-4fb5-b86a-726594b96c3c" width="100%"> |


---

## ✨ 주요 기능

- **영화/TV 추천**: 사용자가 입력한 메시지를 기반으로 OpenAI가 추천 목록을 생성합니다.
- **TMDB 데이터 연동**: 영화 및 TV 시리즈의 포스터, 개요, ID 등 상세 정보를 실시간으로 가져옵니다.
- **반응형 UI**: React와 Bootstrap을 활용한 깔끔하고 직관적인 사용자 인터페이스.
- **무한스크롤 및 캐러셀**: 다수의 추천 결과를 보기 쉽게 탐색 가능.
- **YouTube 연동**: 추천된 작품의 트레일러를 감상할 수 있는 기능.

---

## 🛠 기술 스택

### 프론트엔드

- `React (18.2.0)` - UI 구성 및 상태 관리  
- `@tanstack/react-query (5.28.14)` - 데이터 페칭 및 캐싱  
- `react-router-dom (6.22.3)` - 라우팅 관리  
- `styled-components (6.1.8)` - CSS-in-JS 스타일링  
- `react-youtube (10.1.0)` - YouTube 영상 재생  
- `react-multi-carousel (2.8.5)` - 콘텐츠 탐색 UI

### 백엔드

- `Node.js & Express` - 서버 구축  
- `OpenAI (gpt-4o-mini)` - 추천 로직 구현  
- `Axios` - TMDB API와의 통신  
- `CORS` - 크로스-오리진 요청 처리  
- `dotenv` - 환경 변수 관리

---

## 🚀 사용법

1. 배포 링크([jiyunee-netflix.vercel.app](https://jiyunee-netflix.vercel.app))에 접속합니다.
2. 예: `"슬픈 사랑 영화 추천해줘"`,`"애니메이션 영화 추천해줘"` 와 같이 메시지를 입력합니다.
3. OpenAI가 추천한 영화/TV 시리즈와 TMDB에서 가져온 정보를 확인할 수 있습니다.
4. 세부 정보 페이지에 들어가 포스터를 누르면 해당 작품 트레일러를 감상할 수 있습니다.

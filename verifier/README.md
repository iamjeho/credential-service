## DID 기반 증명서 통합관리 시스템(검증기관 용) Demo
      
본 시스템은 증명서 검증기관 용 DID 기반 증명서 통합관리 시스템 Demo입니다. 
 

## 사전 준비사항
요구사항(관리자)
- Ubuntu OS가 설치되어 있는 Server
- Evernym으로부터 수신 받은 Domain DID와 REST API key(support@evernym.com으로 문의)
- Docker 설치

요구사항(사용자)
- Connect.me가 설치된 Mobile 기기(Android 기반 Mobile Device: 구글 플레이스토어에서 설치 / ios · ipados : 앱스토어에서 설치)


Domain DID와 REST API key 적용
- Evernym으로 부터 수신받은 Domain DID와 REST API key 를 **.env**에 삽입 후 저장.
예시:
```sh
VERITY_URL=https://vas.pps.evernym.com
DOMAIN_DID=          #수정필요
X_API_KEY=           #수정필요
```

서버 실행
- 빌드 : 
```sh
docker build -t demo-web-app .
```
- 실행 : 
```sh
docker run -p 5000:5000 -p 5050:5050 --env-file .env -it demo-web-app
```
## 관리자용 페이지
1. localhost:5000 접속

2. 지원자 연결
- QR코드 생성 클릭
- 팝업창 닫기
- 생성된 QR은 사용자용 페이지(localhost:3030)에서 확인 가능

3. 증명서 제출 요청
- 요청 이름 지정
- 지원자 DID 선택
- 지원에 필요한 증명서 속성 지정
- 사용자에게 증명서 제출 요청
- 사용자가 증명서 제출 시 수신된 증명서에서 데이터 확인 가능

## 사용자용 페이지
1. localhost:5050 접속

2. 증명서 제출
- 페이지 내 QR코드를 Connect.me로 인증 후 Connect 버튼 클릭
- Connect.me 내 My Connections에서 연결 상태 확인 가능
- 발급기관이 증명서 제출 요청 시 Connect.me 앱에서 속성값 확인 후 Share Attributes 클릭
- 발급된 증명서는 Connect.me 내 My Credentials에서 확인 가능

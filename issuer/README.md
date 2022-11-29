## DID 기반 증명서 통합관리 시스템(발급기관 용) Demo
      
본 시스템은 증명서 발급기관용 DID 기반 증명서 통합관리 시스템 Demo입니다. 
 

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
docker run -p 3000:3000 -p 3030:3030 --env-file .env -it demo-web-app
```
## 관리자용 페이지
1. localhost:3000 접속
![image](https://user-images.githubusercontent.com/94879566/204535868-6bfda7ed-0328-4717-acbc-09b5ada7007b.png)


2. 관리자 생성
- 관리자 생성 버튼 클릭
- 관리자 DID 및 키값 생성 확인
![image](https://user-images.githubusercontent.com/94879566/204535956-ce59960b-4f2f-41aa-9cc4-d075cba9d3cf.png)



3. 스키마 생성
- 스키마 이름 지정
- 버전 지정
- 증명서에 필요한 속성 지정
- 스키마 등록 버튼 클릭
![image](https://user-images.githubusercontent.com/94879566/204536002-3df909bc-ef9d-42c0-9ab5-951f479cd15a.png)

- 스키마 목록 확인
![image](https://user-images.githubusercontent.com/94879566/204536027-a5ea5b6e-2b5f-4b3a-953c-2a47c3b2a94e.png)



4. 증명서 양식 등록
- 증명서 양식 이름 지정
- 스키마 ID 선택
- 증명서 양식 등록 버튼 클릭
![image](https://user-images.githubusercontent.com/94879566/204536182-c0dad7a7-8632-4bcb-b6cc-242ede858688.png)

- 증명서 양식 목록 확인
![image](https://user-images.githubusercontent.com/94879566/204536207-1ab51b49-0b54-480a-a86f-3c0334b66e91.png)



5. 사용자 연결

- QR코드 생성 클릭
![image](https://user-images.githubusercontent.com/94879566/204536280-ebb26aad-8e6c-4dcc-945d-376011cb9343.png)

- 팝업창 닫기
![image](https://user-images.githubusercontent.com/94879566/204536315-1672583d-aa39-4fcf-968e-b54f8765e447.png)

- 생성된 QR은 사용자용 페이지(localhost:3030)에서 확인 가능



6. 증명서 발급
- 증명서 이름 지정
- 증명서 발급할 사용자 DID 선택
- 증명서 양식 선택
- 속성에 해당되는 값 입력
- 증명서 발급 버튼 클릭
![image](https://user-images.githubusercontent.com/94879566/204536418-24c66047-4123-46b4-892d-4439f53f02bf.png)




## 사용자용 페이지
1. localhost:3030 접속

2. 증명서 발급 신청
- 페이지 내 QR코드를 Connect.me로 인증 후 Connect 버튼 클릭
- Connect.me 내 My Connections에서 연결 상태 확인 가능
- 발급기관이 증명서 발급 시 Connect.me에서 Accept Credential 클릭
- 발급된 증명서는 Connect.me 내 My Credentials에서 확인가능

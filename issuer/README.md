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


![image](https://user-images.githubusercontent.com/94879566/204724775-9356e65d-d17b-408b-a9f9-c6f0683ffa9a.png)



2. 관리자 생성  


- 관리자 생성 버튼 클릭  
- 관리자 DID 및 키값 생성 확인 


![image](https://user-images.githubusercontent.com/94879566/204724932-3df7c544-994b-4129-8950-0922e86e5975.png)



3. 스키마 생성  


- 스키마 이름 지정

 
- 버전 지정

 
- 증명서에 필요한 속성 지정  
- 스키마 등록 버튼 클릭  


![image](https://user-images.githubusercontent.com/94879566/204724961-269c3397-faf9-4a9a-b0e9-a069981379c0.png)  


- 스키마 목록 확인


![image](https://user-images.githubusercontent.com/94879566/204725000-c4f5ac3b-9a30-4996-b207-90fde4b1469a.png)



4. 증명서 양식 등록


- 증명서 양식 이름 지정


- 스키마 ID 선택


- 증명서 양식 등록 버튼 클릭


![image](https://user-images.githubusercontent.com/94879566/204536182-c0dad7a7-8632-4bcb-b6cc-242ede858688.png)

- 증명서 양식 목록 확인


![image](https://user-images.githubusercontent.com/94879566/204726102-cd3ca02f-f2ba-4195-a92d-845d81e734a4.png)



5. 사용자 연결


- QR코드 생성 클릭


![image](https://user-images.githubusercontent.com/94879566/204726133-7635b14b-5abb-4250-ad43-a8edf85dd409.png)


- 팝업창 닫기


![image](https://user-images.githubusercontent.com/94879566/204726154-df3a6c86-b4b4-48cb-a720-5301ea0057d0.png)


- 생성된 QR은 사용자용 페이지(localhost:3030)에서 확인 가능



6. 증명서 발급


- 증명서 이름 지정


- 증명서 발급할 사용자 DID 선택(사용자가 QR인증을 완료한 상태여야 함) 


- 증명서 양식 선택


- 속성에 해당되는 값 입력


- 증명서 발급 버튼 클릭


![image](https://user-images.githubusercontent.com/94879566/204726309-00feabb6-3e17-45bf-b076-1917bda6c8c3.png)




## 사용자용 페이지
1. localhost:3030 접속


![image](https://user-images.githubusercontent.com/94879566/204726356-0583bdc7-bd1f-4700-99aa-8f481b904e50.png)



2. 증명서 발급 신청


- 페이지 내 QR코드를 Connect.me로 인증 후 Connect 버튼 클릭


![image](https://user-images.githubusercontent.com/94879566/204726562-956c8182-7f58-4077-b5b4-6a91ba6eb41f.png)


![image](https://user-images.githubusercontent.com/94879566/204726577-375465b3-9bd2-49a3-8d9a-85b69ab59c71.png)



- Connect.me 내 My Connections에서 연결 상태 확인 가능



![image](https://user-images.githubusercontent.com/94879566/204726596-41e39613-448e-4111-ab8f-624293615de0.png)



- 발급기관이 증명서 발급 시 Connect.me에서 Accept Credential 클릭



![image](https://user-images.githubusercontent.com/94879566/204539632-00297442-dca1-45aa-82ab-de92c8a3a9f3.png)



- 발급된 증명서는 Connect.me 내 My Credentials에서 확인가능


![image](https://user-images.githubusercontent.com/94879566/204539659-057dbb94-c61e-42ee-9696-d38d5d68f11c.png)



![image](https://user-images.githubusercontent.com/94879566/204539687-b4119d26-d2d0-4452-b795-b4c9e4ecf9cf.png)



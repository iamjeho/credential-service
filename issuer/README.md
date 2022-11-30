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
<img width="608" alt="스크린샷_20221129_101755" src="https://user-images.githubusercontent.com/94879566/204539300-f42f2761-247a-4fda-8594-d8ccc02af34a.png">

2. 증명서 발급 신청
- 페이지 내 QR코드를 Connect.me로 인증 후 Connect 버튼 클릭

- ![image](https://user-images.githubusercontent.com/94879566/204539415-1b88c1cd-2e5f-48c4-bfac-ad4e98d82ce3.png)

- ![image](https://user-images.githubusercontent.com/94879566/204539572-831bfd7f-4b1a-4386-8e04-574280b28564.png)

- Connect.me 내 My Connections에서 연결 상태 확인 가능

-![image](https://user-images.githubusercontent.com/94879566/204539593-50fed5f1-1134-4888-8c21-52d0656fe53d.png)


- 발급기관이 증명서 발급 시 Connect.me에서 Accept Credential 클릭

![image](https://user-images.githubusercontent.com/94879566/204539632-00297442-dca1-45aa-82ab-de92c8a3a9f3.png)

- 발급된 증명서는 Connect.me 내 My Credentials에서 확인가능

- ![image](https://user-images.githubusercontent.com/94879566/204539659-057dbb94-c61e-42ee-9696-d38d5d68f11c.png)

- ![image](https://user-images.githubusercontent.com/94879566/204539687-b4119d26-d2d0-4452-b795-b4c9e4ecf9cf.png)



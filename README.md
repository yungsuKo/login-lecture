# login-lecture

`인증과 인가`
누가, 언제, 어떻게 쓰고 있는가를 파악하기 위해 어떤 사이트에서 인증, 인가가 있음
인증과 인가는 API에서 가장 자주 구현되는 기능중 하나

## 인증 : Authentication `누구인가`
유저가 누구인지 확인하는 절차, 회원가입하고 로그인 하는 것

♻️ 회원가입 과정
1. 아이디, 비밀번호를 생성한다.
2. 비밀번호를 암호화하여 DB에 저장한다.

♻️ 로그인 과정
1. 등록된 아이디와 비밀번호를 생성한다.
2. 암호화되어 DB에 저장된 사용자의 비밀번호가 서로 일치하는지 비교
2-a. 일치하면 로그인
2-b. 일치하지 않을 시, 로그인 실패
3. 로그인에 성공하면, Access Token을 클라이언트에 전송.
4. 최초 로그인 성공 후, 다음부터는 Access Token을 첨부하여, 서버에 요청을 전송함으로써 매번 로그인하는 과정을 생략할 수 있음

---
## 인가 : Authorization `어디까지 가능한가`
유저에 대한 권한을 허락하는 것

♻️ 인가 과정
1. 인증 절차를 통해, Access Token을 생성한다. 이 토큰은 사용자의 정보를 담은 상태이다.
2. 사용자가 요청을 보낼 때, Access Token을 첨부하여 보낸다.
3. 서버는 해당 Access Token을 복호화하고, 정보를 얻는다.
4. 얻은 정보를 사용하여, DB에서 사용자 권한을 확인한다.
4-a. 사용자의 권한이 확인되면, 해당 요청을 처리하도록 한다.
4-b. 권한이 없다면, 에러코드를 출력한다. 일반적으로 Unauthorized Response(401) 에러코드를 출력한다.

정보를 첨부하여 통신을 보내는 방법
* 아이디와 비밀번호를 같이 보낸다 ⇒ 매번 서버에서 확인을 해야 함. 정보의 민감성
* 시간 제한이 있는 임시 아이디를 보낸다 ⇒ 어떤 유저인지 파악하기 힘듦, 그 유저의 정보를 또 따로 저장해야함.
* 일정 시간 동안 인가에 유효한 정보로 대체한다. ⇒ JWT 이용, 유저의 정보를 담은 JSON 데이터를 암호화.
  ⇒ 유저가 로그인에 성공하면, Access Token을 첨부하여 서버에 요청을 전송한다고 했다. 
  Access Token을 생성하는 방법은 여러 가지가 있는데, 
  그 중 JWT는 가볍고, 토큰 자체를 정보를 사용하는 자가 수용적인 방식으로 정보를 안전하게 전달하므로 널리 사용되는 기술이다.

---
### `session based auth`
client에서 서버로 id, password
session id를 쿠키에 저장, 서버 db에 session id 저장
이후 브라우저에서 요청시 서버 db에 session id와 매칭하여 로그인/로그아웃

### `token based auth`
client에서 서버로 id, password를 입력하면 token을 발급함
token의 유효성 여부로만 판단하여 회원여부를 판단.
오직 request에 들어있는 token만 보고 권한을 줌

### `localstorage`
웹 스토리지 객체
클라이언트에 데이터를 저장
기존 쿠키 = 4kb → 웹 스토리지 = 5MB
localStorage와 sessionStorage는 브라우저 내 키-값쌍을 저장할 수 있게함.
쿠키를 사용하며 브라우저에 데이터를 저장할 수 있음에도 다른 객체를 사용해 저장하는 이유
더 많은 자료를 보관
서버가 http 헤더를 통해 스토리지 객체를 접근할 수 없음
프로토콜과 서브 도메인이 다르면 데이터에 접글할 수 없음
반영구적으로 브라우저에 데이터를 저장함.
브라우저를 종료해도 데이터가 유지됨.
도메인이 다른 경우 로컬 스토리지에 접근할 수 없음

## KAKAO, TOSS : Buy me a Coffee☕

### Tools 🔨
```
React.js, TypeScript
```

해외에는 많은 BUY ME A COFFEE 기능이 존재하고, 상용화되어있더라구요.   
하지만 국내에는 없어서 국내버전으로 만들었습니다.   
기존에 이미 있는 내용이 많습니다.   
카카오, 토스에 대한 QR코드 출력을 설정해놓았습니다!   

### 바로 수정이 가능합니다 😁   
- 커스터마이징 해주세요!   
1. src/pages/Index.tsx 내의 파일 수정
```
const myInfo: myInfoType = {
  myName: '김상훈',  //이름
  myType: '웹개발자', //직장 등
  workFor: ['Javascript','React.js', 'Vue.js'], //집중하고 있는 내용
  tistoryLink: 'https://code-hoon.tistory.com', //티스토리링크
  githubLink: 'https://github.com/Hoon-Hub', //깃헙링크
  notionLink: 'https://k-sanghoon.notion.site/31144445ed6b42be9f1e0afee2245a46', //노션링크
  kakaoLink: 'https://qr.kakaopay.com/Ej7jPN3lW', //카카오페이 링크
  tossLink: 'https://toss.me/ksanghoon' //토스아이디 만들어서 넣어주세요
}
```

2. src/components/QRCodes.tsx
```
<img src="" />
```
  src 주소는 개인 블로그 등에 올리고, [주소로 복사] 기능을 사용하시면 됩니다.

   
### How to
```
npm install
npm run start
```

### Updated 🚀
- 02.21. 데스크탑, 모바일 구분을 추가하였습니다. 
  (모바일, 데스크톱 각각 별도의 링크가 필요합니다.)
     

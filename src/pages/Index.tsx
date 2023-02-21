import Content from "../components/Content"
import QRCodes from "../components/QRCodes"
import styles from '../styles/index.module.css'

type workForType = string  
type myInfoType = {
  myName: string; //이름작성하기
  myType: string;
  workFor: workForType[]; //현재 관심/일 하고 있는 언어 작성 
  tistoryLink: string
  githubLink: string
  notionLink: string
}

const myInfo: myInfoType = {
  myName: '김상훈',  
  myType: '웹개발자',
  workFor: ['Javascript','React.js', 'Vue.js'],
  tistoryLink: 'https://code-hoon.tistory.com',
  githubLink: 'https://github.com/Hoon-Hub',
  notionLink: 'https://k-sanghoon.notion.site/31144445ed6b42be9f1e0afee2245a46'
}

const MobileIndex = () => {
  return (
    <div className={styles.mainContentsWrap }>
      <Content myName={myInfo.myName} myType={myInfo.myType} workFor={myInfo.workFor} tistoryLink={myInfo.tistoryLink} githubLink={myInfo.githubLink} notionLink={myInfo.notionLink}/>
      <QRCodes />
    </div>
  )
}

export default MobileIndex
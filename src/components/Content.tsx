import Links from "../components/Links"
import styles from '../styles/index.module.css'
type workForType = string
type ContentsProps = {
  myName: string;
  myType: string;
  workFor: workForType[];
  tistoryLink: string;
  githubLink: string
  notionLink: string
}

const Content = ({myName, myType, workFor, tistoryLink, githubLink, notionLink}: ContentsProps) => {
  return (
    <div className={styles.contentWrap}>
      <div>
        <div>
          <p>안녕하세요, {myType} {myName} 입니다.</p>
          <p>방문해주셔서 감사합니다.</p>
          <p>행복한 하루 되세요😊</p>
        </div>
        <br />
        <div>
          <span>현재 저는 &nbsp;</span>
          {
            workFor.map((item, index) => (
              <>
                <span className={styles.workoutListSpan}>{item}</span>
                <span>
                  { workFor.length !== index+1 ? ',': ' ' }
                </span>
              </>
            ))
          } 
          <span>&nbsp;에 집중하고 있어요.</span>
        </div>
        <br />
        <div>
          <p className={styles.smallText}>TMI: 해당 페이지는 React.js + Typescript로 제작되었어요!</p>
        </div>
        <Links tistoryLink={tistoryLink} githubLink={githubLink} notionLink={notionLink}/>
      </div>
    </div>
  )
}

export default Content
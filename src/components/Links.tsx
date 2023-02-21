import styles from '../styles/index.module.css'


type linksType = {
  tistoryLink: string | ''
  githubLink: string | ''
  notionLink: string | ''
}

const Links = ({tistoryLink, githubLink, notionLink}: linksType) => {
  return (
    <div className={styles.linkImgsWrap}>
      {tistoryLink.length > 0 ? (
        <>
          <a href={tistoryLink} target='_blank' rel="noreferrer">
          <img src="https://www.basicincomeparty.kr/wp-content/uploads/2020/11/tistory-logo-fill.png" alt="티스토리링크" />
          </a>
          &nbsp;
        </>
      ) : ''}
      {githubLink.length > 0 ? (
        <>
          <a href={githubLink} target='_blank' rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="깃허브링크" />
            &nbsp;
          </a>
        </>
      ) : ''}
       {notionLink.length > 0 ? (
        <>
          <a href={notionLink} target='_blank' rel="noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png" alt="노션링크" />
            &nbsp;
          </a>
        </>
      ) : ''}
    </div>
  )
}

export default Links
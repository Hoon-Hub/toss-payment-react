import styles from '../styles/index.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {  BrowserView,  MobileView } from "react-device-detect";

type linkType = {
  kakaoLink: string
  tossLink: string
}

const QRCodes = ({kakaoLink, tossLink}: linkType) => {
  const [kakao, setKakao] = useState(false)
  const [toss, setToss] = useState(false)
  const updateState = (type: number) => {
    if (type === 1) {
      setKakao(true)
      setToss(false)
    } else {
      setKakao(false)
      setToss(true)
    }
  }
  const KakaoIMG = () => (
    <div className={styles.QRImgWrap} onClick={()=>setKakao(false)}>
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvnI4L%2FbtrZ7FWE7MW%2Fnh5j29QL2FPBGNKUgttRH0%2Fimg.png" alt="카카오QR코드" />
    </div>
  )
  const TossIMG = () => (
    <div className={styles.QRImgWrap} onClick={()=>setToss(false)}>
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbXD82d%2FbtrZ5jGQqlR%2FWN2kBCfdZHKF0DBaEwSebK%2Fimg.jpg" alt="토스QR코드" />
    </div>
  )

  return (
    <div className={styles.qrWrap}>
      <Button className={styles.qrButtons} onClick={()=> updateState(1)}  size="lg" variant="warning" active>
        Kakao - Buy me a Coffee ☕
      </Button>
      <Button className={styles.qrButtons} onClick={()=>updateState(2)}  size="lg" variant="primary" active>
        Toss - Buy me a Coffee ☕
      </Button>
      <BrowserView>
        { kakao ? <KakaoIMG /> : '' }
        { toss ? <TossIMG /> : '' }
      </BrowserView>
      <MobileView>
        {kakao ? window.location.href=`${kakaoLink}` : ''}
        {toss ? window.location.href=`${tossLink}` : ''}
      </MobileView>
    </div>
  )
}

export default QRCodes
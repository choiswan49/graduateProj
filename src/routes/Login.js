import React, {useEffect, useRef} from 'react'

const Login = () => {
  
//   const videoEl = document.getElementById('webcam-id');
  const videoEl = useRef(null)
  const startWebcam = ()=>{
      if(navigator.mediaDevices.getUserMedia){
          navigator.mediaDevices.getUserMedia({video:true})
          .then(stream =>{
              videoEl.current.srcObject = stream;
          })
          .catch(err=>{
              console.log('카메라를 가져오지 못했습니다', err);
          })
      }
  }
  const stopWebcam = ()=>{
      const stream = videoEl.current.srcObject;
      const tracks = stream.getTracks();

      for(let i=0; i< tracks.length; i++){
          const track = tracks[i]
          track.stop()
      }
      videoEl.current.srcObject = null
  }
  
  return (
    <>
    <h1>얼굴 인식 로그인</h1>
    <span></span>
    <div className="buttons">
        <button onClick={startWebcam}>캠 열기</button>
        <button onClick={stopWebcam}>캠 닫기</button>
    </div>
    <video ref={videoEl} autoPlay={true}></video>
    </>
  )
}

export default Login
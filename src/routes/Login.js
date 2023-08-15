import React, {useEffect, useRef, useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const useridRef = useRef();

    const loginHandle = ()=>{
        //err
        if (useridRef.current.value === ''){
            alert('id를 입력하세요')
            useridRef.current.focus();
        }else{
            const currentUser = {
                name : useridRef.current.value
            }
            auth.login(currentUser); // 로그인 정보 저장
            useridRef.current.value=''

            navigate('/main')
        }
    }

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
    <div className='login-container'>
    <h1>얼굴 인식 로그인</h1>
    <span></span>
    <div className="buttons">
        <button onClick={startWebcam}>캠 열기</button>
        <button onClick={stopWebcam}>캠 닫기</button>
    </div>
    <video ref={videoEl} autoPlay={true}></video>

        <form className='login-content'
            onSubmit={(e)=>e.preventDefault()}
        >
            <div>
                <input type='text'
                    placeholder='아이디'
                    autoFocus
                    id='user_id'
                    ref={useridRef}
                />
            </div>
            <button onClick={loginHandle}>로그인</button>
        </form>
    </div>
  )
}

export default Login
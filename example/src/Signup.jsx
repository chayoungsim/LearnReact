import { useState, useRef } from 'react'
import './App.css'
import Input from './components/Input.jsx'
import useInput from './hooks/useInput.js'  
import useEmailInput from './hooks/useEmailInput.js';

function App() {
  //배열로 해야함 ,현태상태, 초기값은 변하지 않는다. 
  //지연초기화함수 
  const [nickname, nickRef, onChangeNickname] = useInput('');
  const [password, pwRef, onChangePassword] = useInput('');
  const [phone, phoneRef, onChangePhone] = useInput('');
  const [id, domain, idRef, onChangeEmail, onChangeDomain] = useEmailInput(); 
  const [errors, setErrors] = useState({})
  
  const domains = ['naver.com', 'gmail.com', 'hanmail.net'];

 



  const onSignup = () => { //batch처리 
    if(!id?.trim()) {
      // 현재 state와 다음 state가 달라야 실행된다. 이전값이 필요할떄 
      setErrors((prev) => ({...prev, idError: '아이디를 입력해주세요.'}));
      //setErrors({idError: '아이디를 입력해주세요.'});
      idRef.current?.focus();
      return;
    }

    if(!password?.trim()) {
      setErrors((prev) => ({...prev, passwordError: '비밀번호를 입력해주세요.'}));
      pwRef.current?.focus();
      return;
    }

    if(!nickname?.trim()) {
      setErrors((prev) => ({...prev, nicknameError: '닉네임을 입력해주세요.'}));
      nickRef.current?.focus();
      return;
    }

    if(!phone?.trim()) {
      setErrors((prev) => ({...prev, phoneError: '전화번호를 입력해주세요.'}));
      phoneRef.current?.focus();
      return;
    }

    setErrors({}); //오류 초기화
    console.log(fullDomain, password); //서버로 보내서 로그인
  }

  //파생상태
  const fullDomain = `${id} @ ${domain}`

  return (
    <>
      <div className='log-box'>
        <h1>회원가입</h1>
        <div className='log-box-id'>
          <label htmlFor="id">아이디</label>
          <div className='id-box'>
            <input type="text" value={id} onChange={onChangeEmail} id="id" ref={idRef} />
              { domain === "" ? null  : <span>@</span> }        
              <select value={domain} onChange={onChangeDomain}>
                {domains.map((d) => {
                  return <option key={d} value={d}>{d}</option>
                })}
                <option value="">직접입력</option>
              </select>
          </div>
          <div className='error'>{errors.idError && <span>{errors.idError}</span>}</div>
        </div>
        
        
        <Input 
            type="password" 
            value={password} 
            onChange={onChangePassword} 
            id="password" 
            ref={pwRef} 
            text="비밀번호" 
            errors={errors} 
        />
        <Input 
            type="text" 
            value={nickname} 
            onChange={onChangeNickname} 
            id="nickname" 
            ref={nickRef} 
            text="닉네임" 
            errors={errors} 
        />
        <Input 
            type="text" 
            value={phone} 
            onChange={onChangePhone} 
            id="phone" 
            ref={phoneRef} 
            text="전화번호" 
            errors={errors} 
        />  
       
        <button type="button" onClick={onSignup}>회원가입</button>
      </div>      
    </>
  )
}

export default App

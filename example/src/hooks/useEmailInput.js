import { useState, useRef, useCallback } from 'react';
export default function useEmailInput() {
  const [id, setId] = useState('');
  const [domain, setDomain] = useState('naver.com'); 
  const idRef = useRef(null); 
  
  const onChangeEmail = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangeDomain = useCallback((e) => {
    setDomain(e.target.value);
  }, []); 


  return [id, domain, idRef, onChangeEmail, onChangeDomain];

}
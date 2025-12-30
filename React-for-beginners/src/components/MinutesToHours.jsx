import { useState } from 'react'

function MinutesToHours() {
  const [amount, setAmount] = useState(0)
  const [inverted, setInverted] = useState(false)

  const onChange = (e) => {
    setAmount(e.target.value);
  }

  const reset = () => {
    setAmount(0);
  }

  //const onFlip =() => setFlipped(!flipped);
  const onInvert = () => {
    reset();
    setInverted((current) => !current); // 함수형 업데이트를 사용 권장방식
  }


  return (
    <>        
        <div>
            <label htmlFor="minutes">Minutes</label>
            <input 
                type="number" 
                id="minutes" 
                value={inverted ? amount*60 : amount} 
                placeholder="minutes"
                onChange={onChange} 
                disabled ={inverted}
            />
        </div>
        <div>
            <label htmlFor="hours">Hours</label>
            <input 
                type="number" 
                id="hours"  
                value={inverted ? amount  : Math.round(amount / 60)}
                placeholder="hours"
                onChange={onChange} 
                disabled ={!inverted}
            />
        </div>        
        <button onClick={reset}>Reset</button>
        <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </>
  )
}

export default MinutesToHours;

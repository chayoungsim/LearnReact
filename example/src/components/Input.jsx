import { memo } from 'react';

const Input = ({type, value, onChange, id, ref, text, errors}) => {
  return (
    <div className='log-box-pw'>
        <label htmlFor={id}>{text}</label>
        <input type={type} value={value} onChange={onChange} id={id} ref={ref} /> 
        <div className='error'>{errors[id + 'Error'] && <span>{errors[id + 'Error']}</span>}</div>   
    </div> 
  )
}

export default memo(Input)
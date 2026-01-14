
import { useState } from 'react'
import WheelPicker from './components/WheelPicker'

function App() {

  const [hour, setHour] = useState('00')
  const [minute, setMinute] = useState('00')

  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
      <Picker value={hour} onChange={setHour}>
        {hoursArray.map(h => <Picker.Item key={h} value={h}>{h}시</Picker.Item>)}
      </Picker>
      <Picker value={minute} onChange={setMinute}>
        {minutesArray.map(m => <Picker.Item key={m} value={m}>{m}분</Picker.Item>)}
      </Picker>
    </div>
    </>
  )
}

export default App

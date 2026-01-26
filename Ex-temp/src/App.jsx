import './App.css'

import Calendar from "./components/Calendar"
import Calendar2 from "./components/Calendar2"
import Calendar3 from "./components/Calendar3"
import TimePickerSample from './components/TimePicker'
import InteractiveSlider from './components/interactive_slider'


function App() {


  return (
    <>
      <InteractiveSlider />
      <Calendar />
      <Calendar2 />
      <Calendar3 />
      <TimePickerSample />
    </> 
  )
}

export default App

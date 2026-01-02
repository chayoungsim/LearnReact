
import { useState } from 'react'
import './App.css'
import KmToMiles from './components/KmToMiles'
import MinutesToHours from './components/MinutesToHours'
import Button from './components/Button';
import Todo from './components/Todo';
import Tab from './components/Tab';

function App() {

    const [index, setIndex] = useState("xx");
    const onSelect = (event) => {
        setIndex(event.target.value);
    }

    return (
        <>
            <h1>Super Converter</h1>
            <select onChange={onSelect} value={index}>
                <option value="xx">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">KM & Miles</option>
            </select>
            <hr />
            {index === "xx" ? "Please select your units" : null}
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmToMiles /> : null}
            
            <div className='btn-wrap'>
                <Button text="Convert now!" />
                <Button text="Reset" />
            </div>
            <div>
                <Todo />
            </div>
            <div>
                <Tab />
            </div>
        </>
    )
    }

export default App

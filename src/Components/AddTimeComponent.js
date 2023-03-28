import React,{useState} from 'react'
import '../Styles/AddTimeComponent.css'

export default function AddTimeComponent({StartFunc, addTimer}) {
    const [seconds, setSeconds] = useState('');
    const [minutes, setMinutes] = useState('');

    const addSeconds = (event) => {
        setSeconds(event.target.value)
       }
    const addMinutes = (event) => {
        setMinutes(event.target.value)
       }
    const start = ()=>{
        StartFunc();
        addTimer();
    }

  return (
    <div className='container'>
        <h2>Set Time</h2>
      <div className='forTimer'>  
        <input id='inputForMinutes' type={'number'} max='59' min='0' onChange={addMinutes} placeholder='Minutes:' value={minutes}/>
        <input id='inputForSeconds' type={'number'} max='59' min='0' onChange={addSeconds} placeholder='Seconds:' value={seconds}/>
      </div>
      <button className='startTimeBtn' onClick={start}>start</button>
    </div>
  )
}

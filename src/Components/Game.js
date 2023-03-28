import '../Styles/Game.css';
import React, {useEffect, useState} from 'react'


export default function Game({ hours=0 , minutes=0 , seconds=0, step, timerStatus, setTimerStatus, quetion, quetions, onClickVariant }) {
  
  const percentOfprogressBar = Math.round(step / quetions.length * 100);

  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    
    if(h==0 && m==0 && s==0){
      setTimerStatus(false)
      return ()=>clearInterval();
    }else {
        if (m === 0 && s === 0) {
        setTime([h - 1, 59, 59]);
      } else if (s == 0) {
        setTime([h, m - 1, 59]);
      } else { 
        setTime([h, m, s - 1]);

      }
    }
   
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return ()=>clearInterval(timerID)
  });

  return (
  <div className='container-Game'>
    
    <div className='containerForTimer'>
      <h2 className='Timer'>
          {`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
      </h2>
    </div>

      <div className='progress'>
        <div style={{width: `${percentOfprogressBar}%`}} className='progressbar'/>
      </div>

      <div>
        <h2>{step+1}. {quetion.title}</h2>
          <ul>
            {
            quetion.variants.map((text, index)=>
            (
            <li onClick={()=>onClickVariant(index)} key={text} > {text} </li>
            ))
            }
            </ul>
      </div>
        
  </div>
  )
}


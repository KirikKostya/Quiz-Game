import {React, useState} from 'react'
import '../Styles/Result.css';

export default function Result({step, correct, quetions}) {
  
  const result = Math.round(correct/quetions.length * 100);
  const [allQuestion, setAllQuestion] = useState(quetions);

  return (
    <div className='result-container'>
      <div className='result'>
        <h1>Answers</h1>
        <ul className='answersList'>
          {
            allQuestion.map(value=>(
              <p 
                className='forAnswears' 
                key={value.title}>" {value.title} " &#10145; 
                <span>
                  {value.variants[value.correct]}
                </span>
              </p>
            ))
          }
        </ul>
      <h1>Your result is {correct} from {quetions.length}</h1>
        {
          result >= 0 && result<=30 
            ? <p className='red'>It's bad result ({result}%)</p>
              : result > 30 && result <= 70 
                ? <p className='yellow'>It's good result ({result}%)</p>
                  : result > 70 && result <= 100 
                    ? <p className='green'>it's cool result ({result}%)</p>
                      : console.log('error')}

        <a href='/'>
          <button className='RapitBtn'>Repeat</button>
        </a>
      </div>
    </div>
  )
}

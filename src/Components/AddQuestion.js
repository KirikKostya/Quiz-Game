import React, { useState } from 'react'
import 'D:/MyVSCodeProjects/React/quiz-game/src/Styles/ForAddQuetion.css'

export default function AddQuestion({FunctionForAddQuestion, StartFunc}) {
   const [tittle, setTittle] = useState('');
   const [variants, setVariants] = useState('');
   const [correct, setCorrect] = useState('');

   const addTittle = (event) => {
    setTittle(event.target.value)
   };
   const addVariants = (event) => {
    setVariants(event.target.value)
   };
   const addCorrect = (event) => {
    setCorrect(event.target.value)
   }

  return (
    <div className='InputsForQuestion'>
      <h2>Add Questions to the test</h2>
        <input id='inputTittle' onChange={addTittle} placeholder='Enter Your Question:' required value={tittle}/>
        <input id='inputVariants' onChange={addVariants} placeholder='Enter Answers:' required value={variants}/>
        <input id='inputCorrect' type={'number'} onChange={addCorrect} max='10' placeholder='Enter Correct Answer' value={correct}/>
      
        <button className={'AddQuestionBtn'}
         onClick={()=>
          {FunctionForAddQuestion();
          setTittle('');
          setVariants('');
          setCorrect('')}}
          >AddQuestion</button>
        <button className='startBtn' onClick={StartFunc}>next</button>
    </div>
  )
}

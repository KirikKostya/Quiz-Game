import '../Styles/App.css';
import Game from './Game.js';
import Result from './Result.js';
import AddTimeComponent from './AddTimeComponent';
import React, {useState} from 'react';
import { render } from '@testing-library/react';
import AddQuestion from './AddQuestion.js';

const quetions = [
  {
    title: `'10'+'10'`,
    variants: [10, 20, 100, 1010],
    correct: 3
  },
  {
    title: 'What is React?',
    variants: ['FrameWork', 'Library', 'Programming language'],
    correct: 1
  },
  {
    title: 'a++?',
    variants: ['Postfix increment', 'Prefix increment','Postfix decrement', 'Prefix decrement'],
    correct: 0
  },
  {
    title: '--a?',
    variants: ['Postfix increment', 'Prefix increment','Postfix decrement', 'Prefix decrement'],
    correct: 3
  },
  {
    title: 'Method is ...',
    variants: ['is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out.',
     'a programmed procedure that is defined as part of a class and included in any object of that class',
     'is a programming technique using function or algorithm that calls itself one or more times until a specified condition is met at which time the rest of each repetition is processed from the last one called to the first.'],
    correct: 1
  },
  {
    title: `What is the data type: '10' ?`,
    variants: ['Number', 'Boolean', 'String', 'Object'],
    correct: 2
  },
  {
    title: `NaN is ... data type.`,
    variants: ['Number', 'NaN', 'Undefined'],
    correct: 0
  },
  {
    title: 'Callback is...',
    variants: ['is a programming technique using function or algorithm that calls itself one or more times until a specified condition is met at which time the rest of each repetition is processed from the last one called to the first.',
     ' the process of defining a problem (or the solution to a problem) in terms of (a simpler version of) itself',
     'is one of the fundamentals of OOP. It refers to the bundling of data with the methods that operate on that data'],
    correct: 0
  },
  {
    title: 'Polymorphism is...',
    variants: ['the provision of a single interface to entities of different types, or the use of a single symbol to represent multiple different types',
    'a “chunk” of code that you can use over and over again, rather than writing it out multiple times',
    'a series of steps that your program repeats until an end-of-file condition is reached' 
  ],
    correct: 0,
  },
  {
    title: 'Arrays is...',
    variants: ['a series of steps that your program repeats until an end-of-file condition is reached',
    'a series of memory locations – or \'boxes\' – each of which holds a single item of data, but with each box sharing the same name',
    'statement ends the execution of a function, and returns control to the calling function'],
    correct: 1,
  }
]

function App() {

  const [step, setStep] = useState(-2);
  const [timerStatus, setTimerStatus] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(0);
  const quetion = quetions[step];

  const FunctionForAddQuestion = ()=>{
    const inputTittle = document.querySelector('#inputTittle');
    const inputVariants = document.querySelector('#inputVariants');
    const inputCorrect = document.querySelector('#inputCorrect');
    
    if(inputTittle.value !=='' && inputVariants.value!==0 && inputCorrect.value!==''){
      quetions.push(
            {
              title: inputTittle.value,
              variants: inputVariants.value.split(','),
              correct: inputCorrect.value - 1
            }
            );

            console.log(quetions);
            inputTittle.focus();

    } else {
      alert('Sorry, you should enter all field!')
    }
  }

  const addTimer = ()=>{
    const inputForSeconds = document.querySelector('#inputForSeconds');
    const inputForMinutes = document.querySelector('#inputForMinutes')

    setSeconds(Number(inputForSeconds.value));
    setMinutes(Number(inputForMinutes.value));
  }

  const onClickVariant = (index) => {
    setStep(step+1);
    if(index === quetion.correct){
      setCorrect(correct+1)
    }
  }

  const StartFunc = ()=>{
    quetions.length == 0 ? alert('Error!') : setStep(step+1);
  }
  
  return (
    <div className="App">
       {
        step == -2  
          ? <AddQuestion 
              FunctionForAddQuestion={FunctionForAddQuestion}
              StartFunc = {StartFunc}
            />
            : step == -1 
              ? <AddTimeComponent 
                  addTimer={addTimer}
                  StartFunc={StartFunc}
                />
                : step !== quetions.length && timerStatus==true 
                  ? <Game 
                      timerStatus={timerStatus}
                      setTimerStatus={setTimerStatus} 
                      minutes={minutes} 
                      seconds={seconds} 
                      quetions={quetions} 
                      step={step} 
                      quetion={quetion} 
                      onClickVariant={onClickVariant} 
                    />
                    : <Result 
                        step={step} 
                        correct={correct}
                        quetions={quetions}
                      /> 
       }
    </div>
  );
}

export default App;

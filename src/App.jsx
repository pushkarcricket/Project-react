

import { useState } from 'react';
import './App.css'

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep]=useState(1)
  const [isOpen, setisOpen]=useState(true)

  // const step=1;

  const previous=()=>{
    if(step >1){
      setStep(step-1)

    }
   
  }
  const next=()=>{
    if (step<3){

      setStep(step+1)
    }
  
   
  }
  const handleButton=()=>{
    setisOpen(!isOpen)
  }

  return (

    <div>

    
    {isOpen &&(

      <div>
        <button className='close' onClick={handleButton}>&times;</button>

    
      <div className='steps'>

        <div className='numbers'>
        <div className={step>=1 ? "active" :""}>1</div>
        <div className={step >=2 ? "active" :""}>2</div>
        <div className={step >=3 ?"active" :""}>3</div>
        </div>
        
      </div>
      <p className='message'>Hello Step {step}:{messages[step-1]}</p>
      <div className='buttons'>
        <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={previous}>Previous</button>
        <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={next}>Next</button>
      </div>
      </div>
    )
    }
    </div>
  )
}

export default App

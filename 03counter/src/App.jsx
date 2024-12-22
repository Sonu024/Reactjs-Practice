import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setcounter] = useState(15)
const valueAdded = () => {
  if(counter == 20){
    counter = counter;
  }
  else{
  counter= counter + 1
  setcounter(counter)
  console.log("Value added", counter);
  }
}

const valueremoved = () => {
if(counter == 0){
  counter = counter
}
else{
  counter= counter - 1
  setcounter(counter)
  console.log("Value removed", counter);
}
}

  return (
    <>
    <h1>I am learning React.</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={valueAdded}>Add value : {counter}</button>
    <button onClick={valueremoved}>Remove value: {counter}</button>
    
    </>
  )
}

export default App

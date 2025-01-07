
//useState, useEffect, useContext

import { useState, useEffect, useRef } from 'react'
import './App.css'

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const changeToBlue = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }
//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button type='button' onClick={changeToBlue}>
//         Blue
//       </button>
//     </>
//   )
// }

// export default Car

// function Count(){
//   const[count, setCount] = useState(0)

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count+1)
//     }
//     , 1000)
//   }, [])

//   return (
//     <>
//   <h1>Count: {count}</h1>
//   </>
//   )
// }

// export default Count


// function Counter(){
//     const [alphabet, setAlphabet] = useState("A")
//     const [word, setWord] = useState("")

//     useEffect(() => {
//       setWord(() => alphabet+"ON")
//     }, [alphabet])

//     return(
//       <>
//       <h1>Alphabet: {alphabet}</h1>
//       <button type="button" onClick={() => {
//         setAlphabet((a) => a+"A")}
//     }>
//         Change</button>
//       <h1>word: {word}</h1>
//       </>
//     )
// }

// export default Counter



function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 2;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// }

// export default App



import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>
  {
    let i
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnnopqrstuvwxyz"
    if (number){
      str += "0123456789"
    }
    if(char){
      str += '@!%$#&*+{}'
    }


    for(i=1; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },
  [length, number, char, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator])

  const copyIt = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 4);
      window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
    <div className='w-full max-w-md mx-auto px-4 my-8 bg-gray-500'>
      <h1 className='text-center text-3xl text-white font-bold my-5'>Password Generator</h1>
        <div className='flex shadow overflow-hidden mb-7 p-4 '>
          <input type='text' value={password} 
          className='outline-none w-full py-2 px-5'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className='bg-red-500 text-white px-4 font-bold' 
          onClick={copyIt}>
            Copy
          </button>
        </div>

        <div className='flex gap-4'>
          <div className='flex items-center'>
            <input
            type='range'
            max={100}
            min={6}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer text-white'
            />
            <label>Length:{length}</label> 
          </div>

          <div>
            <input
            type='checkbox'
            value={number}
            onChange={() => {
              setNumber((prev) => !prev)
            }}
            />Numbers
          </div>

          <div>
            <input
            type='checkbox'
            value={char} 
            onChange={() => {
              setChar((prev) => !prev)
            }}
            />Characters
          </div>


        </div>

    </div>
      
    </>
  )
}

export default App

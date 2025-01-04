import {useState} from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");
  return (
    <div className=" h-screen w-full" style={{backgroundColor: color}}>
      <div className="fixed flex flexwrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flexwrap justify-center gap-10 shadow-lg bg-white rounded'>
          <button onClick={() => setColor("blue")} className="outline-none" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("green")} className="outline-none px-4" style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4" style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4" style={{backgroundColor: "Purple"}}>Purple</button>
          <button onClick={() => setColor("brown")} className="outline-none px-4" style={{backgroundColor: "Brown"}}>Brown</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4" style={{backgroundColor: "Pink"}}>Pink</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;

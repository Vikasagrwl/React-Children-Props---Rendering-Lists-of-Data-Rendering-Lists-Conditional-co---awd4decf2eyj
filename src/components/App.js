import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  const [output, setOutput] = useState(0);
  return (
    <div id="main">
      <ChildComponent setOutput={setOutput}/>
      <p id='output'>{output}</p>
    </div>
  )
}


export default App;

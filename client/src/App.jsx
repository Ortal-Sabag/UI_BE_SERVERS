import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [fruitsArray, setFruitsArray] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
    setFruitsArray(response.data.fruits);
  }
  useEffect(()=>{
    fetchAPI();
  }, []);
  return (
    <>
      {fruitsArray.map((fruit, index)=>(
       <div key={index}>
          <p>{fruit}</p>
       </div> 
      ))}
    </>
  )
}

export default App

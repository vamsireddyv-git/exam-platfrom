import { useState, useEffect } from "react"
import axios from 'axios'

const App = () => {
  const [state, setState] = useState("Checking..");

  // Checking Database is connected or not
  useEffect(() => {
    const url = import.meta.env.VITE_API_URL
    const checkHealth = async() => {
      try{
      await axios.get(`${url}/health/db`)
      setState("Database Connected")
    }catch(error){
      setState("Cannot reach server")
    }
    }
    checkHealth()
  },[])

  return (
    <div>{state}</div>
  )
}

export default App
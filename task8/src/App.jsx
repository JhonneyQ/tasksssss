import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicExample from './components/formik'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BasicExample/>
    </>
  )
}

export default App
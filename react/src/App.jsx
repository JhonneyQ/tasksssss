import './App.css'
import Card from './components/array/arr'
import Button from './components/Button'
import Hello from './components/Hello'
import buta from './new'


function App() {
 return (
    <>
    <Hello/>
    <Button/> 
    <div className='cards'>
      <Card className="card" title="eldjan" age={19}/>
      <Card className="card" title="abdulla" age={20}/>
      <Card className="card" title="canon" age={19}/>
    </div>
    


    </>
    
  )
  
}
buta
export default App

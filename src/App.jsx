import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-950 min-h-lvh'>
      <Todo></Todo>
    </div>
  )
}

export default App

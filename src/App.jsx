import { BrowserRouter as Router } from 'react-router-dom'

import Home from './page/Home'
import './App.css'

function App() {

  return (
    <Router className='App'>
      <Home />
    </Router>
  )
}

export default App

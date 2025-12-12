
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Header from './layouts/Header'
import Routers from './routes/Router'


function App() { 
  return (    
      <BrowserRouter basename="/myblog">
        <Header />
        <Routers />
      </BrowserRouter>
  )
}

export default App

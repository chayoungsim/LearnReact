
import './App.scss'
import './assets/styles/style.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Medicine from './pages/Medicine.jsx'
import Setting from './pages/Setting.jsx'



function App() {
  

  return (
    
      <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/setting" element={<Setting />} />
          </Route>
      </Routes>

  )
}

export default App


import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ReactQueryPage from './pages/ReactQueryPage.jsx'

function App() {
 

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </>
  )
}

export default App

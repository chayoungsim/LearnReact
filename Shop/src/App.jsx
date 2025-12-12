
import './App.scss'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import ProductAll from './pages/ProductAll'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/products" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App

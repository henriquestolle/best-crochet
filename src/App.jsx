import './App.css'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
        </Route>
        <Route path="/cart" element={ <Cart />} />
        <Route path="/login" element={ <LoginSignup />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

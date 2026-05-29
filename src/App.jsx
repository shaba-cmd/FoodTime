import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages//Home/Home.jsx'
import Blog from './pages/Blog/Blog.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Store from './pages/Store/Store.jsx'
import { GlobalStyle } from './GlobalStyle.styled.js'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>

      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/store' element={<Store />}/>
        </Routes>
      <Footer />

      </BrowserRouter>
    </>
  )
}

export default App

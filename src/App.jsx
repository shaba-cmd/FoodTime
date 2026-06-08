import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle.styled.js'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Home from './pages//Home/Home'
import Blog from './pages/Blog/Blog'
import AboutUs from './pages/AboutUs/AboutUs'
import PrivateRoute from './pages/PrivateRoute/PrivateRoute.jsx'
import Cart from './pages/Cart/Cart'
import Store from './pages/Store/Store'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Footer from './components/layout/Footer/Footer'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [cartCounter, setCartCounter] = useState(0)

  return (
    <>
      <GlobalStyle />
      
      <Header isAuth={isAuth} cartCounter={cartCounter}/> 

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/about-us' element={<AboutUs />}/>

          <Route element={<PrivateRoute isAuth={isAuth}/>}>
            <Route path='/store' element={<Store setCartCounter={setCartCounter} />} />
            <Route path='/cart' element={<Cart />} />
          </Route>

          <Route path='/sign-in' element={<SignInPage setIsAuth={setIsAuth}/>}/>
          <Route path='/sign-up' element={<SignUpPage />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>

      <Footer />
    </>
  )
}

export default App
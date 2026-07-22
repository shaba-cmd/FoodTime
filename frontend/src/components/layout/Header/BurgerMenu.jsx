import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import { Block, List, BtnBox, Cart } from './BurgerMenu.styled'
import { useState } from 'react'

const BurgerMenu = ({ isAuth, cartCounter }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <img onClick={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}} src="./burgerMenu.png" alt="Menu" />

      {isOpen && 
        <Block>
          <img onClick={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}} src="./closeMenu.png" alt="Close" />
          <nav>
            <List>
              <Link onClick={() => {setIsOpen(false)}} to='/'>Home</Link>
              <Link onClick={() => {setIsOpen(false)}} to='/blog'>Blog</Link>
              <Link onClick={() => {setIsOpen(false)}} to='/about-us'>About us</Link>
              <select name="language">
                <option value="EN">EN</option>
                <option value="RU">RU</option>
              </select>
            </List>
          </nav>
          <BtnBox>
            {isAuth ? <Button onClick={() => {setIsOpen(false)}} styles={'header-btn'} link={'/sign-in'} text={'Exit'} /> : <Button onClick={() => {setIsOpen(false)}} styles={'header-btn'} link={'/sign-in'} text={'Login'} />}
            <Cart onClick={() => {setIsOpen(false)}} to='/cart'>
              <img src="/cart.svg" alt="cart" />
              {cartCounter !== 0 && 
                <div className='-counter'>
                  <div>{cartCounter}</div>
                </div>
              }
            </Cart>
          </BtnBox>
        </Block>
      }
    </div>
  )
}

export default BurgerMenu
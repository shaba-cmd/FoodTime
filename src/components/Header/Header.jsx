import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { SHeader, Logo, Block, List, BtnBox, Cart } from './Header.styled'

const Header = () => {
  return (
    <SHeader className='container'>
        <Logo to='/'>
            <img src="/logo.svg" alt="logo" />
        </Logo>
        <Block>
            <nav>
                <List>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about-us'>About us</Link>
                    <select name="language">
                        <option value="EN">EN</option>
                        <option value="RU">RU</option>
                    </select>
                </List>
            </nav>
            <BtnBox>
                <Button styles={'header-btn'} link={'/auth'} text={'Login'} />
                <Cart to='/cart'>
                    <img src="/cart.svg" alt="cart" />
                    <div className='-counter'>
                        <div>1</div> {/* здесь будет храниться состояние кол-ва добавленных продуктов */}
                    </div>
                </Cart>
            </BtnBox>
        </Block>
    </SHeader>
  )
}

export default Header
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import { SHeader, Logo, Block, List, BtnBox, Cart } from './Header.styled'
import { useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu'

const Header = ({ isAuth, cartCounter }) => {
    const [scrolled, setScrolled] = useState(false);
    const [screenMenu, setScreenMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 880);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ScreenWidth = () => {
            setScreenMenu(window.innerWidth > 840);
        };
        ScreenWidth();
        
        window.addEventListener('resize', ScreenWidth);

        return () => window.removeEventListener('resize', ScreenWidth);
    }, []);

    return (
        <SHeader className='container' $type={!screenMenu ? 'mobile' : scrolled && 'scrolled'}>
            <Logo to='/'>
                <img src="/logo.svg" alt="logo" />
            </Logo>

            {screenMenu ? 
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
                        {isAuth ? <Button styles={'header-btn'} link={'/sign-in'} text={'Exit'} /> : <Button styles={'header-btn'} link={'/sign-in'} text={'Login'} />}
                        <Cart to='/cart'>
                            <img src="/cart.svg" alt="cart" />
                            {cartCounter !== 0 && 
                                <div className='-counter'>
                                    <div>{cartCounter}</div>
                                </div>
                            }
                        </Cart>
                    </BtnBox>
                </Block>
                :
                <div className='hidden'>
                    <BurgerMenu  isAuth={isAuth} cartCounter={cartCounter}/>
                </div>
            }
        </SHeader>
    )
}

export default Header
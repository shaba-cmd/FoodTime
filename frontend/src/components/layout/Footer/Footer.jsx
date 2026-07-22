import { Link } from 'react-router-dom'
import { SFooter, FooterBox, LogoBox, Logo, Text, Navigate, UlBox, Ul, FooterText } from './Footer.styled'

const Footer = () => {
  return (
    <SFooter className='container'>
      <FooterBox>
        <LogoBox>
          <Logo to='/'>
            <img src="/whiteLogo.svg" alt="logo" />
          </Logo>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. 
            Bibendum sapien suspendisse ipsum urna malesuada elit. 
            Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. 
          </Text>
        </LogoBox>

        <Navigate>
          <UlBox>
            <Ul>
              <li>Quick links</li>
              <Link to='/store'>Browse Foodtime</Link>
              <Link to='/store'>Browse Food tim</Link>
              <Link to='/auth'>Registrations</Link>
            </Ul>

            <Ul>
              <li>About</li>
              <Link to='/about-us'>About us`</Link>
              <Link to='/about-us'>Minssion</Link>
              <Link to='/about-us'>Contact</Link>
            </Ul>
          </UlBox>
          
          <Ul>
              <li>Social</li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a> </li>             
          </Ul>
        </Navigate>
      </FooterBox>
      <FooterText>© 2023 Nayeemur R Sakib</FooterText>
    </SFooter>
  )
}

export default Footer
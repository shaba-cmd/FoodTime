import hero from '../../assets/hero.png'
import heroBefore from '../../assets/heroBefore.png'
import leaf from '../../assets/leaf.png'
import leafSec from '../../assets/leaf-sec.png'
import location from '../../assets/location.svg'
import search from '../../assets/search.svg'
import check from '../../assets/check.svg'
import { SHero, Box, Title, Text, SearchContainer, LocationIcon, SearchInput, SearchBtn, ImgBox, AfterBox, ImgAfter } from './Hero.styled'

const Hero = () => {
  return (
    <SHero className='container'>
        <Box>
            <Title>Order food online from your favourite local restaurants<span>.</span></Title>
            <Text>Freshly made food delivered to your door.</Text>

            <SearchContainer>
                <LocationIcon>
                    <img src={location} alt="location" />
                </LocationIcon>

                <SearchInput type="text" placeholder="Enter your location"/>

                <SearchBtn>
                    <img src={search} alt="search" />
                    Search
                </SearchBtn>
            </SearchContainer>

            <img className='leaf' src={leaf} alt="leaf" />
        </Box>

        <ImgBox>
            <img src={hero} alt="food" />
            <img className='hero__img-before' src={heroBefore} alt="food" />
            <AfterBox>
                <ImgAfter>
                    <img src={check} alt="check" />
                    <p>200k+</p>
                </ImgAfter>
                <p>People Delivered</p>
            </AfterBox>
            <img className='leaf-sec' src={leafSec} alt="leafSec" />
        </ImgBox>
    </SHero>
  )
}

export default Hero;
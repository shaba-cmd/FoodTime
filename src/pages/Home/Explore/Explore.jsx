import delivery from '../../../assets/delivery.png'
import Button from '../../../components/ui/Button/Button'
import { SExplore, Box, Title, Text } from './Explore.styled'
import arrow from '../../../assets/arrow.svg'

const Explore = () => {
  return (
    <SExplore>
        <Box>
            <Title>Explore your favourite city’s food.</Title>
            <Text>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. 
                Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</Text>
            <Button
                link={'/store'}
                text={'Explore'}
            >
                <img src={arrow} alt="go" />
            </Button>
        </Box>
        <img className='delivery' src={delivery} alt="delivery" />
    </SExplore>
  )
}

export default Explore
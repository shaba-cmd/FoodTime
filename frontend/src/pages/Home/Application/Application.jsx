import appFoodTime from '../../../assets/appFoodTime.jpg'
import AppStore from '../../../assets/AppStore.svg'
import GooglePlay from '../../../assets/GooglePlay.svg'
import { SApplication, TextBox, Title, Text, BtnBox, Iamge } from './Application.styled'

const Application = () => {
  return (
    <SApplication className='container'>
        <TextBox>
            <Title>Put us in your pocket</Title>
            <Text>Download our app from google play or app store and you don’t have to be worry about your food anymore. </Text>
            <BtnBox>
                <a href="#"><img src={AppStore} alt="AppStore" /></a>
                <a href="#"><img src={GooglePlay} alt="GooglePlay" /></a>
            </BtnBox>
        </TextBox>
        <Iamge src={appFoodTime} alt="application" />
    </SApplication>
  )
}

export default Application
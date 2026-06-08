import aboutUs from '../../assets/aboutUs.jpg'
import mission from '../../assets/mission.jpg'
import contact from '../../assets/contact.jpg'
import { About, AboutBox, MissionBox, ContactBox, Title, Text, ImageBox, ImgMiss, ContactLink, ContactTextBox, ContactContainer, ImgContainer } from './AboutUs.styled'

const AboutUs = () => {
  return (
    <About className='container'>
      <AboutBox>
        <div>
          <Title>About us</Title>
          <Text>
            FoodTime is a modern food delivery service that connects you to your favorite restaurants in your city. 
            We started with a simple idea: everyone deserves fast, high-quality and delicious delivery right to their door.
            Our platform unites hundreds of local restaurants, from cozy cafes to premium establishments. 
            We carefully select our partners to ensure the freshness, taste and safety of each dish.
            Today, FoodTime brings joy to thousands of people every day. 
            We believe that good food is not just nutrition, but a way to make the day better.
          </Text>
        </div>
        <ImageBox>
          <img src={aboutUs} alt="about-us" />
        </ImageBox>
      </AboutBox>
      <MissionBox>
          <Title>Our mission</Title>
          <Text>
            FoodTime's mission is to make food delivery simple, fast and enjoyable for everyone.
            We strive to:
            Connect people with the best local cuisine effortlessly
            Support local restaurants by helping them grow and develop
            Take care of quality at every stage — from order to delivery
            Create a user-friendly experience that saves you time
            Our goal is to make ordering food take less than a minute, and waiting brings only joy.
          </Text>
          <ImgMiss>
            <img src={mission} alt="mission" />
          </ImgMiss>
      </MissionBox>
      <ContactBox>
        <Title>Contact</Title>
        <ContactContainer>
          <ImgContainer>
            <img src={contact} alt="contact" />
          </ImgContainer>

          <ContactTextBox>
            <Text><span>Do you have any questions or suggestions? We are always in touch!</span></Text>
            <div>
              <Text><span>Email:</span> hello@foodtime.com</Text>
              <Text><span>Telephone:</span> +1 800 123-45-67</Text>
              <Text><span>Address:</span> 123 Foodie Street, Culinary City, CA 90210</Text>
            </div>
            <div>
              <Text>
                <span>Support service working hours:</span><br />
                Mon–Fri: 8:00 – 22:00<br />
                Sat–Sun: 9:00 – 20:00
              </Text>
            </div>    
            <Text><span>Social networks:</span></Text>
            <ContactLink> 
              <h2><a href="#">Instagram</a></h2>
              <h2><a href="#">Facebook</a></h2>
              <h2><a href="#">Twitter</a></h2>
              <h2><a href="#">Telegram</a></h2>
            </ContactLink>
          </ContactTextBox>
        </ContactContainer>
      </ContactBox>
    </About>
  )
}

export default AboutUs
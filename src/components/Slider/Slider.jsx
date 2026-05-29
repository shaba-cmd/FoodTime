import Item from '../Item/Item.jsx'
import Button from '../Button/Button.jsx'
import arrow from '../../assets/arrow.svg'
import restaurants from '../../assets/restaurants.svg'
import order from '../../assets/order.svg'
import time from '../../assets/time.svg'

const Slider = () => {
  return (
    <section className='slider'>
      <div className='slider__btn'>
        <Item
          title={'Wide selection of restaurants'}
          text={'Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique.'}
        >
          <img src={restaurants} alt="restaurants" />
        </Item>
        
        <Item
          title={'Easy ordering process'}
          text={'Lorem ipsum dolor sit amet consectetur. Ornare massa nunc .'}
        >
          <img src={order} alt="order" />
        </Item>
        
        <Item
          title={'Fast delivery within 20 min'}
          text={'Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh.'}
        >
          <img src={time} alt="time" />
        </Item>
      </div>

      <div className='slider__img'>
        <p>Want to be a part of Foodtime?</p>
        <p>List your restaurant or shop on foodtime.</p>
        <Button
          link={'/cart'}
          text={'Get started'}
        >
          <img src={arrow} alt="go" />
        </Button>
      </div>
    </section>
  )
}

export default Slider
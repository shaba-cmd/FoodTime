import Item from './Item/Item'
import Button from '../../../components/ui/Button/Button'
import arrow from '../../../assets/arrow.svg'
import { SSlider, SliderBtn, Iamge, Title, Text } from './Slider.styled.js'
import { slider } from '../../../../data.js'
import { useEffect, useState } from 'react'

const Slider = () => {
  const [activeId, setActiveId] = useState(slider[0].id)
  const [idSlide, setIdSlide] = useState(slider[0])

  const handleClickSlider = (el) => {
    setActiveId(el.id)
    setIdSlide(el)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeId - 1 + 1) % slider.length
      setActiveId(slider[nextIndex].id)
      setIdSlide(slider[nextIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [activeId])

  return (
    <SSlider className='container' >
      <SliderBtn>
        {slider.map((el) => { return (
            <Item 
              key={el.id}
              onClick={() => handleClickSlider(el)}   
              isActive={el.id === activeId}       
              title={el.title}
              text={el.text}
            >
              <img src={el.icon} alt={el.title} />
            </Item>
        )})}
      </SliderBtn>

      <div>
        <Iamge key={idSlide.id} $type={idSlide.slide.img}>
          <div>
            <Title>{idSlide.slide.title}</Title>
            <Text>{idSlide.slide.text}</Text>
            <Button
              styles={'slider-btn'}
              link={'/cart'}
              text={idSlide.slide.btn}
            >
              <img src={arrow} alt="go" />
            </Button>
          </div>
        </Iamge>
      </div>
    </SSlider>
  )
}

export default Slider
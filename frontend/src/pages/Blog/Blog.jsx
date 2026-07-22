import { SBlog, HeaderText, Title, Text, ImageBox } from './Blog.styled'
import blogHead from '../../assets/blogHead.jpg'

const Blog = () => {
  return (    
    <SBlog className='container'>
      <HeaderText>
        <div>
          <Title>FoodTime Blog</Title>
          <Text>
            Welcome to the FoodTime blog — here we share delicious recipes, 
            nutrition tips, and stories from the world of food.
          </Text>
        </div>
        <ImageBox>
          <img src={blogHead} alt="BlogHead" />
        </ImageBox>
      </HeaderText>
    </SBlog>
  )
}

export default Blog
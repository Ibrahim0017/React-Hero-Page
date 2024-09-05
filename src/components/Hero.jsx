import styled from "@emotion/styled"
import image from "../assets/Image/87157069_10030620.png"
 
const Hero = () => {
    return (
        <Container>
        <Wrapper>
            <Left>
                <H1>Learn new skills online with top educators</H1>
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor auctor nibh a vulputate.</Content>
                <Button>Start Learning Today</Button>
            </Left>
            <Right>
             <ImageHolder>
             <img src={image} />
             </ImageHolder>
              </Right>
        </Wrapper>
        </Container>
    )
}

export default Hero

const Container = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
 width: 80%;
 height: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;

  @media (max-width: 809px) {
    flex-direction: column;
  }
`
const Left = styled.div`
margin-top: 30px;
flex: 1;

@media (max-width: 809px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const H1 = styled.h1`
font-size: 3.5rem;
font-weight: 700;
margin-bottom: 25px;

@media (max-width: 1014px){
    font-size: 2.8rem;
}
@media (max-width: 809px){
    text-align: center;
    font-size: 2rem;
}
`
const Content = styled.div`
font-weight: 500;
font-size: 16px;
margin-bottom: 20px;
margin-right: 10px;
@media (max-width: 809px){
    text-align: center;
    font-size: 12px;
}
`
const Button = styled.button`
border: none;
background-color: black;
padding: 15px 25px;
color: white;
cursor: pointer;
border-radius: 5px;
`
const Right = styled.div`
flex: 1;

@media (max-width: 809px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
}
`
const ImageHolder = styled.div`
height: 240px;
border-radius: 40px;
background: linear-gradient(117deg, rgba(124,161,236,1) 10%, rgba(199,179,238,1) 40%, rgba(241,147,172,1)91%);
display: flex;
justify-content: center;
border-radius: 40px;

img{
    width: 300px;
    height: 450px;
    object-position: center;
    position: relative;
    bottom: 210px;
}

@media (max-width: 809px){
    width: 300px;
    height: 200px;
    img{
        width: 200px;
        height: 300px;
        bottom: 100px;
    }
}
`
import styled from "@emotion/styled";
import logo from "../assets/react.svg";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={logo} />
        </Logo>
        <Navs>
          <Nav>Home</Nav>
          <Nav>Courses</Nav>
          <Nav>Services</Nav>
          <Nav>About Us</Nav>
          <Nav>Contact Us</Nav>
        </Navs>
        <Menu><IoIosMenu /></Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;
const Menu = styled.div`
font-size: 30px;
cursor: pointer;
display: none;

@media(max-width: 480px){
    display: block;
}
`
const Image = styled.img``;
const Nav = styled.div`
`;
const Navs = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px){
    display: none;
  }
`;
const Logo = styled.div``;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

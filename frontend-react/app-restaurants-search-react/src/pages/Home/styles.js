import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  max-width: 250px;
  max-height: 70px;
  margin-bottom: 12px;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  margin: 12px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin: 0 5px;
  }
`;


export const ModalTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  margin: 12px 0;
`;

export const ModalContent = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  line-height: 19px;
  text-align: justify;
`;
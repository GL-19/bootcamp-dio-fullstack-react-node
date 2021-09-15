import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px 0;
  background-color: #FFFFFF;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border-right: 10px;
  object-fit: cover;
`;

export const RestaurantImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
`; 

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
`; 
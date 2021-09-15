import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 10%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 13px;
  color: #FFFFFF;
`; 
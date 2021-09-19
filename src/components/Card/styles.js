import styled from "styled-components";

export const CardContainer = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  border: black solid 5px;
  border-radius: 10%;
`;

export const InfoDescription = styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 16px;
  font-weight: bold;
`;

export const Info = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
`;
import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black solid 5px;
  border-radius: 10%;
`;

export const Name = styled.h1`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: bold;
`;

export const Info = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
`;
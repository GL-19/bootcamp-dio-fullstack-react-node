import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 10%;
  border: black solid 2px;
  margin: 25px 0;
  padding: 10px;
  
`;

export const PhotoContainer = styled.div`
  display: flex;
  min-width: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-family: 'Roboto Slab', 'sans-serif', serif;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  font-family: 'Roboto Slab', 'sans-serif', serif;
  font-size: 15px;
  margin: 0;
`;

export const Link = styled.a`
  font-family: 'Roboto Slab', 'sans-serif', serif;
  font-style: italic;
  color: black;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
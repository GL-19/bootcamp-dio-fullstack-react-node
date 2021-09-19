import React from 'react';
import { ProfileContainer, Name, Info, Photo } from './styles';

export default function Profile(props) {
  const { profileImg, name, login, location, repos, email, bio } = props;
  return (
    <ProfileContainer>
      <Name>Nome: {name}</Name>
      <Photo src={profileImg} alt="Foto usuário" />
      <Info>Login: {login}</Info>
      <Info>Localização: {location || "Não informada"}</Info>
      <Info>{bio}</Info>
      <Info>Quantidade de repositórios: {repos} </Info>
      <Info>Email:  {email || "Não informado"}</Info>
    </ProfileContainer>
  )
}

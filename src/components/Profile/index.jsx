import React from 'react';

export default function Profile(props) {
  const { profileImg, name, login, location, repos, email, bio } = props;
  return (
    <div>
      <img src={profileImg} alt="" />
      <p>Nome: {name}</p>
      <p>Login: {login}</p>
      <p>Localização: {location || "Não informada"}</p>
      <p>{bio}</p>
      <p>Quantidade de repositórios: {repos} </p>
      <p>Email: {email || "Não informado"}</p>
    </div>
  )
}

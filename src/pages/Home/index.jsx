import React, { useState } from 'react';
import { Card, Profile } from '../../components';
import { getRepos, getUser } from '../../services/api';
import { ContentWrapper } from './styles';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  function handleSearch() {
    getRepos(searchValue)
      .then((response) => {setRepos(response.data);  console.log(repos)})
      .catch(() => console.error("Pesquisa falhou"));
    getUser(searchValue)
      .then((response) => {setUser(response.data); console.log(user)})
      .catch(() => console.error("Pesquisa falhou"));
  }

  return (
    <ContentWrapper>
      <h1>Pesquisa de repositórios</h1>
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={handleSearch} >Pesquisar</button>
      {user && (
        <Profile 
          profileImg={user.avatar_url} 
          name={user.name} 
          login={user.login}
          location={user.location || "Não informado"}
          repos={user.public_repos}
          email={user.email}
          bio={user.bio}
        />)}
      {repos.map((repo) => 
        <Card 
          name={repo.name} 
          createDate={repo.created_at} 
          lastUpdateDate={repo.pushed_at} 
          url={repo.clone_url}
        />
      )}
    </ContentWrapper>
  )
}

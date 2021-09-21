import React, { useState } from 'react';
import { Card, Profile } from '../../components';
import { getRepos, getUser } from '../../services/api';
import { PageWrapper, CardsWrapper, SearchWrapper, Logo, Input, Button, Warning } from './styles';
import githubLogo from '../../assets/images/GitHub_Logo.png'

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [failedSearch, setFailedSearch] = useState(false);

  function handleSearch() {
    getRepos(searchValue)
      .then((response) => {
        setRepos(response.data); 
        console.log(response.data);
        setFailedSearch(false);
      })
      .catch(() => {
        setRepos([]); 
        setFailedSearch(true);
      })
    getUser(searchValue)
      .then((response) => {
        setUser(response.data); 
        console.log(response.data);
        setFailedSearch(false);
      })
      .catch(() => {
        setUser({}); 
        setFailedSearch(true);
      })
  }

  return (
    <PageWrapper>
      <Logo src={githubLogo} alt="Logo Github" />
      <SearchWrapper>
        <Input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <Button onClick={handleSearch} >Pesquisar</Button>
      </SearchWrapper>
      {failedSearch && <Warning>Usuário não encontrado</Warning>}
      {user.login && <Profile userData={user} />}
      <CardsWrapper>
        {repos.map((repo) => 
          <Card 
            name={repo.name} 
            description={repo.description}
            createDate={repo.created_at} 
            lastUpdateDate={repo.pushed_at} 
            url={repo.clone_url}
            forks={repo.forks_count}
            stars={repo.stargazers_count}
          />
        )}
      </CardsWrapper> 
    </PageWrapper>
  )
}

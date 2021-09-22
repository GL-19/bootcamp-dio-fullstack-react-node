import React, { useState } from 'react';
import { Card, Profile } from '../../components';
import { getRepos, getUser } from '../../services/api';
import { PageWrapper, CardsWrapper, SearchWrapper, Logo, Input, Button, Warning } from './styles';
import githubLogo from '../../assets/images/GitHub_Logo.png'

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [failedSearch, setFailedSearch] = useState(false);

  async function handleSearch() {
    let reposResponse = await getRepos(searchValue);
    let userResponse = await getUser(searchValue);
    localStorage.setItem('repositories', JSON.stringify(reposResponse.data));
    localStorage.setItem('user', JSON.stringify(userResponse.data));
    setFailedSearch(false);
  }

  return (
    <PageWrapper>
      <Logo src={githubLogo} alt="Logo Github" />
      <SearchWrapper>
        <Input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <Button onClick={handleSearch} >Pesquisar</Button>
      </SearchWrapper>
      {failedSearch && <Warning>Usuário não encontrado</Warning>}
    </PageWrapper>
  )
}

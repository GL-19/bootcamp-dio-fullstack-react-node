import React, { useState } from 'react';
import { Card } from '../../components';
import { getRepos } from '../../services/api';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [repos, setRepos] = useState([]);
  function handleSearch() {
    getRepos(searchValue)
      .then((response) => setRepos(response.data))
      .catch(() => console.error("Pesquisa falhou"));
  }
  return (
    <div>
      <h1>Pesquisa de repositórios</h1>
      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={handleSearch} >Pesquisar</button>
      {repos.map((repo) => <Card name={repo.name} />)}
    </div>
  )
}

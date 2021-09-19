import axios from 'axios';

export function getRepos(user) {
  const path = 'https://api.github.com/users';
  return axios.get(`${path}/${user}/repos`);
}
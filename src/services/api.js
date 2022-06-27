import axios from 'axios';

const path = 'https://api.github.com/users';

export function getRepos(user) {
  return axios.get(`${path}/${user}/repos`);
}

export function getUser(user) {
  return axios.get(`${path}/${user}`);
}
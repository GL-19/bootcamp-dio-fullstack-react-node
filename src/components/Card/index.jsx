import React from 'react';

export default function Card({ name, createDate, lastUpdateDate, url }) {
  return (
    <div>
      <p>Nome Repositorio: {name}</p>
      <p>Data de criação: {createDate.split('T')[0]}</p>
      <p>Data do último commit: {lastUpdateDate.split('T')[0]}</p>
      <p>URL: {url}</p>
    </div>
  )
}

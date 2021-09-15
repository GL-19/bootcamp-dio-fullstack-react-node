import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantImageContainer, RestaurantImage, Title, Address } from './styles';

export default function RestaurantCard({ restaurant, onClick }) {
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#E7711C">
          Avaliação
        </ReactStars>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantImageContainer>
        <RestaurantImage
          src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
          alt="Imagem do Restaurante"
        />
      </RestaurantImageContainer>
    </Restaurant>
  );
}

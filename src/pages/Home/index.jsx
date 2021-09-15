import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalContent,
  ModalTitle,
} from './styles';
import { ImageCard, RestaurantCard, Modal, Map, Loader } from '../../components';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, selectedRestaurant } = useSelector((state) => state.restaurants);

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
      console.log(`A query é ${query} e o input value é ${inputValue}`);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do restaurante"></Logo>
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <ImageCard
                    key={restaurant.place_id}
                    image={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>) : ( 
            <Loader/> 
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalTitle>{selectedRestaurant && selectedRestaurant.name} </ModalTitle>
        <ModalContent>
          {selectedRestaurant && "Telefone: " + selectedRestaurant?.formatted_phone_number} 
        </ModalContent>
        <ModalContent>
          {selectedRestaurant && "Endereço: " + selectedRestaurant?.formatted_address} 
        </ModalContent>
        <ModalContent>
          {selectedRestaurant?.opening_hours?.open_now ? "Aberto" : "Fechado"} 
        </ModalContent>
      </Modal>
    </Wrapper>
  );
}

import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

function MapContainer(props) {
  const [map, setMap] = useState(null);
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const { google, query, placeId } = props;

  const getRestaurantDetails = useCallback(
    (map, placeId) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurant(null));
      const request = {
        placeId,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };
      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place));
        } 
      });
    }, [google, dispatch]
  );

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));
      const request = {
        location: map.center,
        radius: '40',
        type: ['restaurant'],
        query,
      };
      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    }, [dispatch, google]
  ) 
  
  useEffect(() => {
    if (query) {
      searchByQuery(map, query);
    }
  }, [query, map, searchByQuery]);

  useEffect(() => {
    if (placeId) {
      getRestaurantDetails(map, placeId);
    }
  }, [placeId, map, getRestaurantDetails]);

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));
    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
        console.log(results);
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);

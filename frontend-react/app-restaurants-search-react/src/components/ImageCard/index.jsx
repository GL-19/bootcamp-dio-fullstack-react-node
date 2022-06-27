import React, { useState, useEffect } from "react";
import { Skeleton } from "../index";
import {Card, Title} from './styles'

export default function ImageCard({image, title}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => setImageLoaded(true);
  }, [image])

  return (
    <>
      {imageLoaded ? (
        <Card image={image}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="70px" height="70px" />
      )}
    </>
  )
}


import React from "react";
import {Card, Title} from './styles'

export default function ImageCard({image, title}) {
  return (
    <Card image={image}>
      <Title>{title}</Title>
    </Card>
  )
}


import React from 'react'
import { CardContainer, Content } from './styles'

export const Card = () => {
  return (
    <CardContainer>
      <img
        src="../src/assets/images/image-product-desktop.jpg"
        alt=""
      />
      <Content>
        <span>Perfume</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
      </Content>
    </CardContainer>
  )
}

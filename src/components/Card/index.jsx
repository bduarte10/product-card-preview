import React from 'react'
import { CardContainer, Content, Price } from './styles'
import desktopImg from '../../assets/images/image-product-desktop.jpg'
import mobileImg from '../../assets/images/image-product-mobile.jpg'
export const Card = () => {
  return (
    <CardContainer>
      <img
        className="desktop"
        src={desktopImg}
        alt=""
      />

      <img
        className="mobile"
        src={mobileImg}
      />
      <Content>
        <span>Perfume</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <Price>
          <span className="price">$149.99</span>
          <span className="price2">$169.99</span>
        </Price>
        <button>
          <img
            src="./src/assets/images/icon-cart.svg"
            alt=""
          />
          Add to Cart
        </button>
      </Content>
    </CardContainer>
  )
}

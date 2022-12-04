import styled from 'styled-components'

export const CardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 1rem;
  max-width: 800px;
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.white};
  .desktop {
    width: 100%;
    object-fit: cover;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  } ;
`
export const Content = styled.section`
  padding: 2rem 2.5rem;

  & > span {
    display: inline-block;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.grayishBlue};
    font-family: 700;
  }
  h1 {
    margin: 1.5rem 0;
    font-size: 3rem;
    color: ${(props) => props.theme.darkBlue};
  }
  p {
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;

    color: ${(props) => props.theme.grayishBlue};
  }
  button img {
    width: 1rem;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.darkCyan};
    outline: none;
    border: none;
    width: 100%;
    padding: 1.2rem 0;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: ${(props) => props.theme.veryDarkCyan};
    }
  }
  @media screen and (max-width: 768px) {
    padding: 2rem;
    h1 {
      font-size: 2rem;
    }
  }
`
export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;

  .price {
    color: ${(props) => props.theme.darkCyan};
    font-size: 3rem;
    font-family: Fraunces;
  }
  .price2 {
    color: ${(props) => props.theme.grayishBlue};
    text-decoration: line-through;
  }
`

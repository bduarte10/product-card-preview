import styled from 'styled-components'

export const CardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  overflow: hidden;
  border-radius: 15px;
  background-color: ${(props) => props.theme.white};

  img {
    width: 100%;
    object-fit: cover;
  }
`
export const Content = styled.section`
  padding: 2rem;
`

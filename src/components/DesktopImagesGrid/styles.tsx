import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 24px;

  > img {
    width: 560px;
    height: 310px;
    object-fit: fill;
    margin-right: 10px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  > div img {
    width: 272px;
    height: 150px;
    object-fit: fill;
  }
`

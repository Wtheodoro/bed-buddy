import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;

  > img {
    height: 284px;
  }
`

export const InfoWrapper = styled.div``

export const NameLocationWrapper = styled.div`
  margin: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid black;

  h1 {
    font-size: 42px;
    font-weight: 700;
  }

  p {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;

    > svg {
      margin-right: 10px;
      color: #1ab65c;
    }
  }
`

export const GalleryDetailsWrapper = styled.div`
  margin: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid black;

  > div + div {
    margin-top: 20px;
  }
`

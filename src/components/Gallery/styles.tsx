import styled from 'styled-components'

export const Container = styled.div`
  > p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 0.2px;
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  > img {
    min-width: 136px;
    height: 107px;
    object-fit: fill;
    border-radius: 12px;
  }

  > img + img {
    margin-left: 10px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

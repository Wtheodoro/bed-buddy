import styled from 'styled-components'

export const Container = styled.div`
  > p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  > img {
    width: 136px;
    height: 107px;
    border-radius: 12px;
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  > img + img {
    margin-left: 10px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

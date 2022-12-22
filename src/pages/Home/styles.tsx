import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 22px 0;
`

export const PlaceCardsWrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 0 10px;

  > div {
    margin: 0 10px;
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

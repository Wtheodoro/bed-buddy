import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > p {
    color: #1ab65c;
    font-size: 20px;
    font-weight: 700;
    margin: 20px;
    cursor: pointer;
  }
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

export const Cover = styled.div`
  width: 100vw;
  height: 40vh;
  background-image: url('/images/hotel-cover.jpeg');
  background-size: cover;
  background-position: bottom;
  margin-bottom: 20px;
`

export const InformationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background: linear-gradient(to top, black, transparent);
  padding: 32px;

  h2 {
    font-size: 42px;
    font-weight: 700;
  }
`

import styled, { keyframes } from 'styled-components'

const AppearAnimation = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-image: url('/images/hotel-cover.jpeg');
  background-size: cover;

  @media (min-width: 768px) {
    background-position: bottom;
  }
`

export const InformationWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  background: linear-gradient(to top, black, transparent);
  padding: 32px;

  h2 {
    font-size: 42px;
    font-weight: 700;
  }

  h1 {
    font-size: 96px;
    font-weight: 700;
    color: #1ab65c;
  }

  button {
    margin: 0 auto;
    animation: ${AppearAnimation} 2s ease-in;
  }

  @media (min-width: 768px) {
    button {
      margin: 0;
    }
  }
`

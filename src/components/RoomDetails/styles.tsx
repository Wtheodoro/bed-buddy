import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 0.2px;
  }

  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 12px;
    font-weight: 300;
  }

  > svg {
    height: 28px;
    width: 28px;
    color: #1ab65c;
  }
`

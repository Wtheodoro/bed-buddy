import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #e8f8ef;

  > div + div {
    margin-top: 20px;
  }
`

export const NavWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;

  span {
    font-weight: 700;
    font-size: 24px;
  }

  svg {
    width: 28px;
    height: 28px;
    margin-right: 20px;
  }
`

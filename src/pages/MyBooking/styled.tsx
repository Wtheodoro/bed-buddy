import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: #e8f8ef;

  > div + div {
    margin-top: 20px;
  }
`

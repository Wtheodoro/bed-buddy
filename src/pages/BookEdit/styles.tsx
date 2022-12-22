import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;

  > p {
    font-weight: 700;
    font-size: 18px;
  }

  .rdrDefinedRangesWrapper {
    display: none;
  }
`
export const GuestWrapper = styled.div`
  margin: 20px;
  h2 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 20px;
  }
`
export const NavWrapper = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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

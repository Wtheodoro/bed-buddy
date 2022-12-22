import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #ededee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  > span {
    margin: 0 40px;
  }
`

export const GuestButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  background: #e8f8ef;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
`

import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: min(100%, 768px);
  min-height: 200px;
  background: white;
  padding: 10px 20px;
  border-radius: 12px;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 12px;
    margin-right: 16px;
  }

  > div {
    display: flex;
  }

  > div:first-child {
    padding-bottom: 20px;
    border-bottom: 1px solid #bfbfbf;
    cursor: pointer;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p {
    margin-bottom: 10px;
  }
`

export const ButtonsWrapper = styled.div`
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    transition: opacity 0.3s ease-in-out;
  }
`

interface IButtonWrapper {
  hide: boolean
}

const ButtonsHiderModifier = {
  hide: css`
    opacity: 0;
    pointer-events: none;
  `,
  show: css`
    opacity: 1;
    pointer-events: all;
  `,
}

export const InitialButtonWrapper = styled.div<IButtonWrapper>`
  ${(props) => ButtonsHiderModifier[props.hide ? 'show' : 'hide']}
`

export const HiddenButtonWrapper = styled.div<IButtonWrapper>`
  ${(props) => ButtonsHiderModifier[props.hide ? 'show' : 'hide']}
`

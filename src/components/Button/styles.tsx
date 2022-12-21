import styled, { css } from 'styled-components'

interface IContainer {
  size: 'small' | 'big'
}

const ButtonModifier = {
  small: () => css`
    padding: 15px 30px;
    font-size: 16px;
  `,
  big: () => css`
    padding: 20px 40px;
    font-size: 18px;
  `,
}

export const Container = styled.button<IContainer>`
  border: none;
  background: #1ab65c;
  color: white;
  font-weight: bold;
  border-radius: 28px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  ${(props) => ButtonModifier[props.size]}
`

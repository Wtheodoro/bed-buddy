import styled from 'styled-components'

interface IContainer {
  backgroundImageUrl: string
}

export const Container = styled.div<IContainer>`
  position: relative;
  min-width: 268px;
  min-height: 336px;
  display: flex;
  align-items: flex-end;
  border-radius: 24px;
  background-image: ${(props) => `url(${props.backgroundImageUrl})`};
  background-size: cover;
  overflow: hidden;
  color: white;
`

export const InfoWrapper = styled.div`
  width: 100%;
  height: 30%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(to top, black, transparent);
`

export const CardName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`
export const CardLocation = styled.h3`
  font-size: 14px;
`
export const CardPrice = styled.h3`
  font-size: 12px;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`
export const StarIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

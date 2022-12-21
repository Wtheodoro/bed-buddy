import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 1120px;
  margin: 0 auto;
  overflow: hidden;

  > img {
    width: auto;
  }
`
interface ICoverImage {
  src: string
}

export const CoverImage = styled.div<ICoverImage>`
  width: 100%;
  height: 284px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    display: none;
  }
`

export const InfoWrapper = styled.div``

export const DesktopImageGridWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding: 20px;
  }
`

export const NameLocationWrapper = styled.div`
  margin: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid black;

  h1 {
    font-size: 42px;
    font-weight: 700;
  }

  p {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;

    > svg {
      margin-right: 10px;
      color: #1ab65c;
    }
  }
`

export const GalleryDetailsWrapper = styled.div`
  margin: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid black;

  > div + div {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const RoomPageFooter = styled.footer`
  position: fixed;
  right: 0;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;

  span {
    font-size: 22px;
    font-weight: 700;
    color: #1ab65c;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const MedediaMatch = styled.div`
  @media (min-width: 768px) {
    width: 48%;
  }
`

export const DesktopBookingContainner = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 48%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span {
      font-size: 22px;
      font-weight: 700;
      color: #1ab65c;
    }
  }
`

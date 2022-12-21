import React from 'react'
import { Container, ImagesWrapper } from './styles'

interface IGallery {
  imageUrls?: string[]
}

const Gallery: React.FC<IGallery> = ({ imageUrls }) => {
  return (
    <Container>
      <p>Gallery Photos</p>

      <ImagesWrapper>
        {imageUrls?.map((image) => (
          <img key={image} src={image} alt='preview' />
        ))}
      </ImagesWrapper>
    </Container>
  )
}

export default Gallery

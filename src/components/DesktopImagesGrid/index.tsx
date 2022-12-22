import React from 'react'
import { Container } from './styles'

interface IDesktopImagesGrid {
  mainImageUrl: string
  previewImageUrls: string[]
}
const DesktopImagesGrid: React.FC<IDesktopImagesGrid> = ({
  mainImageUrl,
  previewImageUrls,
}) => {
  return (
    <Container>
      <img src={mainImageUrl} alt='main' />
      <div>
        {previewImageUrls.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} alt='preview' />
        ))}
      </div>
    </Container>
  )
}

export default DesktopImagesGrid

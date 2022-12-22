export interface IBooking {
  id: string
  placeId: number
  placeName: string
  guests: number
  location: string
  startDate: Date
  endDate: Date
  coverImageUrl: string
  rate: number
}

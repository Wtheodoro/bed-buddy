import React, { useState } from 'react'
import PagehigherOrderComponent from '../../components/PagehigherOrderComponent'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Container, PlaceCardsWrapper } from './styles'
import { PlaceCard } from '../../components'
import MOCK_PLACES from '../../constants/places'

const HomePage = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(2)

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection

    if (!startDate || !endDate) return

    setStartDate(startDate)
    setEndDate(endDate)
  }

  return (
    <Container>
      {/* <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#fd5861']}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
      /> */}

      <PlaceCardsWrapper>
        {MOCK_PLACES.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </PlaceCardsWrapper>
    </Container>
  )
}

export default PagehigherOrderComponent(HomePage)

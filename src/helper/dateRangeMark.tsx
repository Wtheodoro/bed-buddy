// FROM REACT DATE RANGE

import { format } from 'date-fns'
import { dateFormat } from './dateNextAvailable'

const customDayContent = (day: Date, bookedDates: Date[]) => {
  const formatedBookedDates = bookedDates.map((el) => dateFormat(el))
  const formatedDay = dateFormat(day)

  return (
    <div>
      {formatedBookedDates.includes(formatedDay) && (
        <div
          style={{
            height: '5px',
            width: '5px',
            borderRadius: '100%',
            background: 'orange',
            position: 'absolute',
            top: 2,
            right: 2,
          }}
        />
      )}
      <span>{format(day, 'd')}</span>
    </div>
  )
}

export default customDayContent

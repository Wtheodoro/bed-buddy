import { format } from 'date-fns'

const dateRangeFormat = (startDate: any, endDate: any) => {
  const formatedStartDate = format(new Date(startDate), 'MMM dd, yyyy')
  const formatedEndDate = format(new Date(endDate), 'MMM dd, yyyy')
  return `${formatedStartDate} - ${formatedEndDate}`
}

export default dateRangeFormat

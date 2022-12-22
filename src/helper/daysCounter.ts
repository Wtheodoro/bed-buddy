const daysCounter = (startDate: any, endDate: any) => {
  const difference = Math.abs(startDate - endDate)
  const days = difference / (1000 * 3600 * 24)
  return days + 1
}

export default daysCounter

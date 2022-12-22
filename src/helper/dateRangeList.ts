const dateRangeList = (startDate: any, endDate: any) => {
  const difference = Math.abs(startDate - endDate)
  const days = difference / (1000 * 3600 * 24) + 1

  const datesArray = []

  for (let i = 0; i < days; i++) {
    datesArray.push(new Date(Math.abs(startDate) + i * (1000 * 3600 * 24)))
  }

  return datesArray
}

export default dateRangeList

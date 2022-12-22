import moment from 'moment'

const dateNextAvailable = (bookedDates: any[]) => {
  if (!bookedDates.length) return new Date()

  const now = new Date()

  let daysToSkipFromToday = 0

  for (let i = 0; i < bookedDates.length; i++) {
    const baseDate = new Date(
      Math.abs(now as any) + daysToSkipFromToday * (1000 * 3600 * 24)
    )
    if (dateFormat(baseDate) !== dateFormat(bookedDates[i])) break

    daysToSkipFromToday++
  }

  return new Date(
    Math.abs(now as any) + daysToSkipFromToday * (1000 * 3600 * 24)
  )
}

const dateFormat = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export default dateNextAvailable

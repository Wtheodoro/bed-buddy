const dateNextAvailable = (bookedDates: any[]) => {
  if (!bookedDates.length) return new Date()
  const sortedDates = bookedDates.sort((a, b) => a - b)

  const now = new Date()

  let daysToSkipFromToday = 0

  for (let i = 0; i < sortedDates.length; i++) {
    const baseDate = new Date(
      Math.abs(now as any) + daysToSkipFromToday * (1000 * 3600 * 24)
    )
    if (dateFormat(baseDate) === dateFormat(sortedDates[i]))
      daysToSkipFromToday++
  }

  return new Date(
    Math.abs(now as any) + daysToSkipFromToday * (1000 * 3600 * 24)
  )
}

export const dateFormat = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export default dateNextAvailable

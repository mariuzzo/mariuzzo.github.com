import { formatDistance } from 'date-fns'

export const daysAgo = (date: Date | number) => {
  return formatDistance(date, new Date(), { addSuffix: true })
}

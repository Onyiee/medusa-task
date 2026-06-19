const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

export function formatDate(isoDate) {
  if (!isoDate) return ''
  // Split manually instead of new Date(isoDate) to avoid UTC-to-local timezone drift.
  const [year, month, day] = isoDate.split('-').map(Number)
  if (!year || !month || !day) return isoDate
  return dateFormatter.format(new Date(year, month - 1, day))
}

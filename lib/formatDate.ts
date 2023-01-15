export default function formatDate(date: string) {
  if (date === null) {
    return
  }
  return new Date(date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
  })
}

export default function getTweetIDFromURL({ url }) {
  const pathname = new URL(url).pathname

  return pathname.split('/')[3]
}

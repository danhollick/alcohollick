export const getId = (text: string) => {
  return text?.toLowerCase?.().replace(/\s/g, '-').replace(/\.|\?/g, '')
}

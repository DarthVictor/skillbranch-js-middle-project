import { set } from 'lodash'

export default function parse(input) {
  const output = {}
  if (input && typeof input === 'string') {
    const lines = input.split(/\r\n|\r|\n/g)
    lines.forEach((line) => {
      const [path, value] = line.split('=')
      set(output, path, value)
    })
  }
  return output
}
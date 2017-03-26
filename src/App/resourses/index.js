export default function () {
  return {
    Parser: require('./Parser').default(...arguments)
  }
}

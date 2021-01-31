export default {
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://loclahost/api'
      : 'http://loclahost/api'
}

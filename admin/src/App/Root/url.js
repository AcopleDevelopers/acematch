const isLocalhost = window.location.hostname.includes('localhost')
const baseURL = isLocalhost
  ? `http://${window.location.hostname}:3000`
  : 'https://api.acematch.cl'

export default baseURL

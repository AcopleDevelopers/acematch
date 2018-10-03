const isLocalhost = window.location.hostname.includes('localhost')
const baseURL = isLocalhost
  ? `http://${window.location.hostname}:3000`
  : 'http://api.acematch.cl'

export default baseURL

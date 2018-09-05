const isLocalhost = window.location.hostname.includes('localhost')
const baseURL = isLocalhost
  ? `http://${window.location.hostname}:3000`
  : 'http://acematch-api.orionapps.org'

export default baseURL

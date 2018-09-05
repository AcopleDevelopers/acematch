import baseURL from 'App/Root/url'

export default function(uri) {
  let uriParts = uri.split('.')
  let fileType = uriParts[uriParts.length - 1]

  let formData = new FormData()
  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`
  })

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    }
  }

  return fetch(`${baseURL}/upload`, options)
}

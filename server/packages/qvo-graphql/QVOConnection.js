import {HTTP} from 'meteor/http'
import {Meteor} from 'meteor/meteor'

export async function postData(route, data) {
  const url = `https://api.qvo.cl/${route}`
  const result = await HTTP.post(url, {
    data,
    headers: {
      Authorization: `Bearer ${Meteor.settings.qvo.apiToken}`
    }
  })
  return result.data
}

export async function getData(route) {
  const url = `https://api.qvo.cl/${route}`
  const result = await HTTP.get(url, {
    headers: {
      Authorization: `Bearer ${Meteor.settings.qvo.apiToken}`
    }
  })
  return result.data
}

export async function deleteData(route) {
  const url = `https://api.qvo.cl/${route}`
  const result = await HTTP.del(url, {
    headers: {
      Authorization: `Bearer ${Meteor.settings.qvo.apiToken}`
    }
  })
  return result.data
}

export async function putData(route, data) {
  const url = `https://api.qvo.cl/${route}`
  const result = await HTTP.put(url, {
    data,
    headers: {
      Authorization: `Bearer ${Meteor.settings.qvo.apiToken}`
    }
  })
  return result.data
}

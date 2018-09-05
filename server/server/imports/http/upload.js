import {Picker} from 'meteor/meteorhacks:picker'
import {Meteor} from 'meteor/meteor'
import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'

const s3 = new aws.S3({
  accessKeyId: Meteor.settings.s3.id,
  secretAccessKey: Meteor.settings.s3.secret,
  region: 'us-east-1'
})

Picker.middleware(
  multer({
    storage: multerS3({
      s3,
      bucket: 'acematch-uploads',
      acl: 'public-read',
      metadata(req, file, cb) {
        cb(null, {fieldName: file.fieldname})
      },
      key(req, file, cb) {
        cb(null, `acematch/${Date.now().toString()}.png`)
      }
    })
  }).any()
)

Picker.route(
  '/upload',
  function(params, request, response) {
    const file = request.files[0]
    if (!file) {
      response.statusCode = 422
      return response.end('NO FILE PRESENT')
    }
    return response.end(
      JSON.stringify({url: file.location, meta: file.metadata})
    )
  },
  {where: 'server'}
)

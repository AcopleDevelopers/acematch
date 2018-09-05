import get from 'lodash/get'

export default function validatePrecenceOfFields(fields) {
  return form => {
    for (let field of fields) {
      if (!get(form, field.name)) return field.message
    }
  }
}

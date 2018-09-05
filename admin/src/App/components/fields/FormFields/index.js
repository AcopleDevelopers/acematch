import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'simple-react-form'

function FormFields({fields, className}) {
  return (
    <div className={className}>
      {fields.map((field, index) => (
        <div key={index} className={field.className}>
          {field.label && (
            <div className="label" style={{paddingTop: 10}}>
              {field.label}
            </div>
          )}
          <Field
            fieldName={field.fieldName}
            placeholder={field.placeholder && field.placeholder}
            type={field.type}
            style={{minHeight: field.height}}
            options={field.options}
            fieldType={field.fieldType}
            multi={field.multi}
            joinValues={field.multi}
          />
        </div>
      ))}
    </div>
  )
}

FormFields.propTypes = {
  fields: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default FormFields

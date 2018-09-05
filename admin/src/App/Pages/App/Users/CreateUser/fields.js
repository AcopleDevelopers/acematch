import Text from 'orionsoft-parts/lib/components/fields/Text'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import DateSelect from 'App/components/fields/DateSelect'
import Number from 'App/components/fields/Number'

export const register = [
  {
    label: 'Email del usuario',
    fieldName: 'email',
    type: Text,
    className: 'col-xs-12 col-sm-12'
  },
  {
    label: 'Contraseña',
    fieldName: 'plainPassword',
    type: Text,
    fieldType: 'password',
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Confirmar contraseña',
    fieldName: 'plainPassword2',
    type: Text,
    fieldType: 'password',
    className: 'col-xs-12 col-sm-6'
  }
]

export const profile = [
  {
    label: 'Nombre del usuario',
    fieldName: 'firstName',
    type: Text,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Apellido del usuario',
    fieldName: 'lastName',
    type: Text,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Fecha de nacimiento',
    fieldName: 'birthdate',
    type: DateSelect,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Categoría',
    fieldName: 'category',
    type: Select,
    options: [
      {label: 'A', value: 'A'},
      {label: 'B', value: 'B'},
      {label: 'C', value: 'C'},
      {label: 'D', value: 'D'}
    ],
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Género',
    fieldName: 'genre',
    type: Select,
    options: [
      {label: 'MALE', value: 'MALE'},
      {label: 'FEMALE', value: 'FEMALE'},
      {label: 'OTHER', value: 'OTHER'}
    ],
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Altura',
    fieldName: 'height',
    type: Number,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Peso',
    fieldName: 'weight',
    type: Number,
    className: 'col-xs-12 col-sm-6'
  }
]

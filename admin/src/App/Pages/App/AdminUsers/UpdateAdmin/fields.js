import Text from 'orionsoft-parts/lib/components/fields/Text'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import DateSelect from 'App/components/fields/DateSelect'
import Toggle from 'orionsoft-parts/lib/components/fields/Toggle'

export const account = [
  {
    label: 'Email del administrador',
    fieldName: 'email',
    type: Text,
    className: 'col-xs-12 col-sm-12'
  }
]

export const profile = [
  {
    label: 'Nombre del administrador',
    fieldName: 'firstName',
    type: Text,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Apellido del administrador',
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
    label: 'Habilitar',
    fieldName: 'enabled',
    type: Toggle,
    className: 'col-xs-12 col-sm-6'
  }
]

import Number from 'App/components/fields/Number'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import DateSelect from 'App/components/fields/DateSelect'

export const profileLeft = [
  {
    label: 'Nombre',
    fieldName: 'firstName',
    type: Text
  },
  {
    label: 'Apellido',
    fieldName: 'lastName',
    type: Text
  },
  {
    label: 'Fecha de nacimiento',
    fieldName: 'birthdate',
    type: DateSelect
  },
  {
    label: 'Género',
    fieldName: 'genre',
    type: Select,
    options: [
      {label: 'MALE', value: 'MALE'},
      {label: 'FEMALE', value: 'FEMALE'},
      {label: 'OTHER', value: 'OTHER'}
    ]
  },
  {
    label: 'Teléfono',
    fieldName: 'phone',
    type: Number
  }
]

export const profileRight = [
  {
    label: 'Ranking',
    fieldName: 'ranking',
    type: Text
  },
  {
    label: 'Categoría',
    fieldName: 'category',
    type: Text,
    options: [
      {label: 'A', value: 'A'},
      {label: 'B', value: 'B'},
      {label: 'C', value: 'C'},
      {label: 'D', value: 'D'}
    ]
  },
  {
    label: 'Altura',
    fieldName: 'height',
    type: Number
  },
  {
    label: 'Peso',
    fieldName: 'weight',
    type: Number
  }
]

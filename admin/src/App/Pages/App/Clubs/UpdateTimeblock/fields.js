import TimeField from 'App/components/TimeField'
import Select from 'react-select'
import Text from 'orionsoft-parts/lib/components/fields/Text'

export const timeblockFields = [
  {
    label: 'Nombre del Bloque',
    fieldName: 'name',
    type: Text,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Hora de inicio',
    fieldName: 'startTime',
    type: TimeField,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Hora de término',
    fieldName: 'endTime',
    type: TimeField,
    className: 'col-xs-12 col-sm-6'
  },
  {
    label: 'Dias habilitado',
    fieldName: 'activeDays',
    type: Select,
    className: 'col-xs-12 col-sm-6',
    options: [
      {label: 'Domingo', value: 0},
      {label: 'Lunes', value: 1},
      {label: 'Martes', value: 2},
      {label: 'Miercoles', value: 3},
      {label: 'Jueves', value: 4},
      {label: 'Viernes', value: 5},
      {label: 'Sabado', value: 6}
    ],
    multi: true
  }
]

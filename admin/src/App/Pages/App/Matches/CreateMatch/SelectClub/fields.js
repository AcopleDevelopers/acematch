import DateSelect from 'App/components/fields/DateSelect'

export const date = [
  {
    label: 'Horarios desde esta Fecha',
    fieldName: 'startDate',
    type: DateSelect,
    className: 'col-xs-12 col-sm-3'
  },
  {
    label: 'Fecha limite',
    fieldName: 'endDate',
    type: DateSelect,
    className: 'col-xs-12 col-sm-3'
  }
]

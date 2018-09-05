export default function(days) {
  let options = []
  for (const i of days) {
    if (i === 0) {
      options.push({label: 'Domingo', value: 0})
    }
    if (i === 1) {
      options.push({label: 'Lunes', value: 1})
    }
    if (i === 2) {
      options.push({label: 'Martes', value: 2})
    }
    if (i === 3) {
      options.push({label: 'Miercoles', value: 3})
    }
    if (i === 4) {
      options.push({label: 'Jueves', value: 4})
    }
    if (i === 5) {
      options.push({label: 'Viernes', value: 5})
    }
    if (i === 6) {
      options.push({label: 'Sabado', value: 6})
    }
  }
  return options
}

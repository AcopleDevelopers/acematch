import {Text} from 'react-native'
import DateInput from 'App/components/fields/DateInput'
import SelectInput from 'App/components/fields/SelectInput'
import TextInput from 'App/components/fields/TextInput'
import AcceptTerms from './AcceptTerms'
import styles from './styles'
import {
  validateEmail,
  validatePrecenceOfFields,
  combineValidators
} from 'App/helpers/validators'

export default [
  {
    components: [
      {
        type: Text,
        children: '¿Cómo te llamas?',
        style: styles.text
      },
      {
        isField: true,
        type: TextInput,
        fieldName: 'profile.firstName',
        style: styles.input,
        placeholder: 'Tu nombre'
      },
      {
        isField: true,
        type: TextInput,
        fieldName: 'profile.lastName',
        style: styles.input,
        placeholder: 'Tu apellido'
      },
      {
        type: Text,
        children: '¿Cuando naciste?',
        style: styles.text
      },
      {
        isField: true,
        type: DateInput,
        fieldName: 'profile.birthdate',
        style: styles.input,
        placeholder: 'Tu fecha de nac.'
      },
      {
        type: Text,
        children: 'Eres',
        style: styles.text
      },
      {
        isField: true,
        type: SelectInput,
        fieldName: 'profile.genre',
        style: styles.input,
        placeholder: 'Tu sexo',
        options: [
          {key: 'MALE', label: 'Hombre'},
          {key: 'FEMALE', label: 'Mujer'},
          {key: 'OTHER', label: 'Otro'}
        ]
      }
    ],
    validate: validatePrecenceOfFields([
      {name: 'profile.firstName', message: 'Debes ingresar tu nombre'},
      {name: 'profile.lastName', message: 'Debes ingresar tu apellido'},
      {
        name: 'profile.birthdate',
        message: 'Debes ingresar tu fecha de nacimiento'
      },
      {name: 'profile.genre', message: 'Debes ingresar tu sexo'}
    ])
  },

  {
    components: [
      {
        type: Text,
        children: '¿Cuánto pesas?',
        style: styles.text
      },
      {
        isField: true,
        type: TextInput,
        fieldName: 'profile.weight',
        style: styles.input,
        placeholder: 'Tu peso en Kg',
        keyboardType: 'numeric'
      },
      {
        type: Text,
        children: '¿Cuánto mides?',
        style: styles.text
      },
      {
        isField: true,
        type: TextInput,
        fieldName: 'profile.height',
        style: styles.input,
        placeholder: 'Tu estatura en cm',
        keyboardType: 'numeric'
      },
      {
        type: Text,
        children: '¿Cuál es tu email?',
        style: styles.text
      },
      {
        isField: true,
        type: TextInput,
        fieldName: 'email',
        style: styles.input,
        placeholder: 'Tu email',
        keyboardType: 'email-address'
      },
      {
        type: Text,
        children: '¿Cuál será tu contraseña?',
        style: styles.text
      },
      {
        isField: true,
        type: TextInput,
        fieldName: 'password',
        style: styles.input,
        placeholder: 'Tu contraseña',
        secureTextEntry: true
      }
    ],
    validate: combineValidators(
      validatePrecenceOfFields([
        {name: 'profile.weight', message: 'Debes ingresar tu peso'},
        {name: 'profile.height', message: 'Debes ingresar tu estatura'},
        {name: 'email', message: 'Debes ingresar tu email'},
        {name: 'password', message: 'Debes ingresar tu contraseña'}
      ]),
      validateEmail('email', 'Debes ingresar un email válido')
    )
  },

  {
    components: [
      {
        type: Text,
        children: 'Cuentanos de tu desempeño...',
        style: styles.text
      },
      {
        isField: true,
        type: SelectInput,
        fieldName: 'profile.category',
        style: styles.input,
        placeholder: 'Tu Categoría',
        options: [
          {key: 'A', label: 'A: ENTRE ESCALAFON Y HONOR'},
          {key: 'B', label: 'B: PRIMERA – SEGUNDA'},
          {key: 'C', label: 'C: TERCERA – CUARTA'},
          {key: 'D', label: 'D: PRINCIPIANTES'}
        ]
      },
      {
        isField: true,
        type: AcceptTerms,
        fieldName: 'profile.acceptTerms'
      }
    ],
    validate: validatePrecenceOfFields([
      {name: 'profile.category', message: 'Debes ingresar tu categoría'},
      {
        name: 'profile.acceptTerms',
        message: 'Debes aceptar los términos y condiciones'
      }
    ])
  }
]

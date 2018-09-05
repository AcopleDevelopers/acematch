import {logout, userId as getUserId} from 'meteor-apollo-accounts'
import {Alert} from 'react-native'
import {ImagePicker, Permissions} from 'expo'
import uploadFile from 'App/helpers/uploadFile'
import ChangePasswordModal from 'App/components/ChangePasswordModal'
import ChangeSubscriptionModal from 'App/components/ChangeSubscriptionModal'
import InfoItem from './InfoItem'
import TitleItem from './TitleItem'
import OptionItem from './OptionItem'

import SET_USER_PROFILE from './queries/setUserProfile'
import GET_ME from './queries/getMe'

export default [
  {
    title: 'Ajustes',
    async generateData({client, setLoading, refetch}) {
      const getMe = () =>
        new Promise(async (resolve, reject) => {
          let retries = 0
          const queryMe = async () => {
            try {
              const result = await client.query({query: GET_ME})
              resolve(result.data.me)
            } catch (err) {
              console.log('Erron on getMe', err)
              if (retries > 3) {
                reject(err)
                return
              }

              retries += 1
              queryMe()
            }
          }
          queryMe()
        })

      setLoading(true)

      let me
      try {
        me = await getMe()
      } catch (err) {
        console.log(err)
        return [
          {
            component: InfoItem,
            label: 'Error de conexión',
            value: 'Intentar de nuevo',
            action: refetch
          }
        ]
      }
      setLoading(false)

      return [
        {
          component: TitleItem,
          title: 'Datos personales'
        },
        {
          component: InfoItem,
          label: 'Nombre',
          value: me.profile.firstName
        },
        {
          component: InfoItem,
          label: 'Apellido',
          value: me.profile.lastName
        },
        {
          component: InfoItem,
          label: 'Foto de perfil',
          value: 'Seleccionar',
          action: async function() {
            await Permissions.askAsync(Permissions.CAMERA_ROLL)
            let pickerResult = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 4]
            })

            try {
              if (pickerResult.cancelled) return
              setLoading(true)
              const result = await uploadFile(pickerResult.uri)
              const picture = await result.json()
              const userId = await getUserId()
              client.mutate({
                mutation: SET_USER_PROFILE,
                variables: {userId, picture}
              })
              Alert.alert(
                'Actualizado!',
                'Se ha actualizado tu imagen de perfil'
              )
            } catch (error) {
              console.log(error)
              Alert.alert('Ocurrió un error', 'No se pudo subir tu imagen')
            } finally {
              setLoading(false)
            }
          }
        },
        {
          component: InfoItem,
          label: 'Peso (Kg)',
          value: me.profile.weight
        },
        {
          component: InfoItem,
          label: 'Estatura (cm)',
          value: me.profile.height
        },
        {
          component: InfoItem,
          label: 'Categoría',
          value: me.profile.category
        },
        {
          component: TitleItem,
          title: 'Datos de cuenta'
        },
        {
          component: InfoItem,
          label: 'Email',
          value: me.email
        },
        {
          component: InfoItem,
          label: 'Contraseña',
          value: 'Cambiar contraseña',
          modal: ChangePasswordModal
        },
        {
          component: InfoItem,
          label: 'Suscripción',
          value: 'Cambiar suscripción',
          modal: ChangeSubscriptionModal,
          modalInfo: {currentSubscription: me.subscription.plan.id}
        },
        {
          component: OptionItem,
          label: 'Cerrar sesión',
          color: 'red',
          style: {alignSelf: 'center', marginVertical: 30},
          action: () => {
            logout(client)
          }
        }
      ]
    }
  }
]

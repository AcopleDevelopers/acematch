import Subtitle from 'App/components/texts/Subtitle'
import moment from 'moment'
import 'moment/locale/es'

import ClubItem from './items/ClubItem'
import CourtItem from './items/CourtItem'
import DayTitle from './items/DayTitle'
import CourtTitle from './items/CourtTitle'
import BlockItem from './items/BlockItem'

import CLUBS_QUERY from './queries/clubsQuery'
import PLAYFIELDS_QUERY from './queries/playfieldsQuery'
import TIMEBLOCKS_QUERY from './queries/timeblocksQuery'

import styles from './styles'

moment.locale('es')

export default [
  {
    title: 'Selección\nde club',
    async generateData({nextStep, client}) {
      const result = await client.query({
        query: CLUBS_QUERY,
        fetchPolicy: 'network-only'
      })
      const {clubs} = result.data

      const list = [
        {
          component: Subtitle,
          children: 'En qué club quieres jugar?',
          style: styles.subtitle
        }
      ]

      clubs.forEach(club => {
        list.push({
          id: club._id,
          component: ClubItem,
          name: club.name,
          image:
            club.picture && club.picture.url
              ? {uri: club.picture.url}
              : require('./imgs/club.png'),
          onPress: () => nextStep(club._id)
        })
      })

      return list
    }
  },
  {
    title: 'Selección\nde cancha',
    async generateData({nextStep, selectedId: clubId, client}) {
      const result = await client.query({
        query: PLAYFIELDS_QUERY,
        variables: {clubId},
        fetchPolicy: 'network-only'
      })
      const {playfields} = result.data.getClub

      if (playfields.length === 0) {
        return [
          {
            component: Subtitle,
            children: 'No hay canchas disponibles',
            style: styles.subtitle
          }
        ]
      }

      const list = [
        {
          component: Subtitle,
          children: `Selecciona tu cancha`,
          style: styles.subtitle
        }
      ]

      playfields.forEach(playfield => {
        list.push({
          id: playfield._id,
          component: CourtItem,
          title: playfield.name,
          // Commente to avoid showing pending matches that doesn't correspond to the searcher GENDER
          // Logic is neede to be added to "filter" by genter
          // subtitle: `${playfield.pendingMatches} solicitud${
          //   playfield.pendingMatches === 0 || playfield.pendingMatches > 1
          //     ? 'es'
          //     : ''
          // }`,
          description: playfield.description,
          onPress: () =>
            nextStep(playfield._id, {playfieldName: playfield.name})
        })
      })
      return list
    }
  },
  {
    title: 'Selección\nde bloque',
    async generateData({
      nextStep,
      selectedId: playfieldId,
      client,
      playfieldName,
      refetch,
      setLoading
    }) {
      // define parameters for query
      const from = moment()
        .add(1, 'day')
        .startOf('day')
      const to = moment()
        .add(15, 'days')
        .endOf('day')

      // make query
      const result = await client.query({
        query: TIMEBLOCKS_QUERY,
        variables: {playfieldId, from, to},
        fetchPolicy: 'network-only'
      })

      if (result.data.getTimeblockForMatches.length === 0) {
        return [
          {
            component: Subtitle,
            children: 'No hay bloques disponibles',
            style: styles.subtitle
          }
        ]
      }

      // Parse query result
      const structuredTimeblocks = result.data.getTimeblockForMatches.reduce(
        (acc, tb) => {
          if (!acc[tb.date]) acc[tb.date] = []
          acc[tb.date].push(tb)
          return acc
        },
        {}
      )

      const list = [
        {
          component: Subtitle,
          children: 'Selecciona tu bloque',
          style: styles.subtitle
        },
        {
          component: CourtTitle,
          text: playfieldName
        }
      ]

      const orderedTimes = Object.keys(structuredTimeblocks).sort()

      orderedTimes.forEach(millis => {
        const textDate = moment(Number(millis))
          .locale('es')
          .format('dd, D MMM')
          .toLowerCase()
        list.push({
          component: DayTitle,
          text: textDate
        })
        structuredTimeblocks[millis].forEach(timeblock => {
          const {name, date, timeblockId} = timeblock
          list.push({
            component: BlockItem,
            players: [timeblock.firstPlayer, timeblock.secondPlayer].filter(
              tb => tb
            ).length,
            name,
            date,
            textDate,
            timeblockId,
            playfieldId,
            refetch,
            setLoading
          })
        })
      })

      return list
    }
  }
]

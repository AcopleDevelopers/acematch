import React from 'react'
import moment from 'moment'

import DayItem from './items/DayItem'
import BlockItem from './items/BlockItem'
import NoMatches from './NoMatches'

import SCHEDULE_QUERY from './queries/scheduleQuery'

export default [
  {
    title: 'Agenda de matches',
    emptyList: <NoMatches />,
    async generateData({client, refetch, setLoading}) {
      const result = await client.query({
        query: SCHEDULE_QUERY,
        fetchPolicy: 'network-only'
      })

      // Parse query result
      const structuredMatches = result.data.getMyMatches.reduce((acc, match) => {
        const date = moment(match.date)
          .startOf('day')
          .toDate()
          .getTime()
        if (!acc[date]) acc[date] = []
        acc[date].push(match)
        return acc
      }, {})

      const orderedTimes = Object.keys(structuredMatches).sort()

      const list = []

      orderedTimes.forEach(millis => {
        const date = moment(Number(millis))
        const textDate = date
          .locale('es')
          .format('dd, D MMM')
          .toLowerCase()
        list.push({
          component: DayItem,
          text: textDate
        })
        const currentDate = moment()

        const cancelable = !(
          currentDate.isAfter(date) ||
          currentDate.isSame(date, 'day') ||
          (currentDate.add(1, 'day').isSame(date, 'day') && currentDate.hours() >= 19)
        )
        structuredMatches[millis].forEach(match => {
          const {
            club: {name: clubName},
            playfield: {name: playfieldName},
            timeblock: {name},
            _id: matchId,
            firstPlayer,
            secondPlayer
          } = match

          list.push({
            component: BlockItem,
            matchId,
            name,
            clubName,
            courtName: playfieldName,
            cancelable: cancelable,
            textDate,
            refetch,
            setLoading,
            waiting: !(firstPlayer && secondPlayer)
          })
        })
      })

      return list
    }
  }
]

import query from 'paginated-graphql/lib/query'

const paginatedUsers = query({
  name: 'paginatedUsers',
  type: 'User',
  params: 'filter: String'
})

const paginatedAdmins = query({
  name: 'paginatedAdmins',
  type: 'User',
  params: 'filter: String'
})

const paginatedMatches = query({
  name: 'paginatedMatches',
  type: 'Match',
  params: 'filter: String'
})

const paginatedClubs = query({
  name: 'paginatedClubs',
  type: 'Club',
  params: 'filter: String'
})

export default `
type Query {
  ${paginatedUsers}
  ${paginatedAdmins}
  ${paginatedMatches}
  ${paginatedClubs}
}`

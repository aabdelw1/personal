const { gql } = require('apollo-server-express')
const Example = require('./Example')

const types = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscriptions {
    _empty: String
  }
  ${Example}
`

module.exports = types

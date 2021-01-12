import gql from 'graphql-tag'

export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      code
      phone
      continent {
        name
      }
      capital
      currency
    }
  }
`


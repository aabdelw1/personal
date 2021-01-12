import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import config from './config.js'

export const client = new ApolloClient({
	uri: config[process.env.GATSBY_NODE_ENV],
	fetch
})
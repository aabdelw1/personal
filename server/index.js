require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const cors = require('cors')
const path = require('path')
const typeDefs = require('./types')
const resolvers = require('./resolvers')

const port = process.env.PORT
// const context = async ({}) => ({})

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers
})

const app = express()

//  when in development update cors access 
//  since dev ui runs on port 8000 and server runs on port 4000
if(process.env.NODE_ENV === 'development') {
	app.use(cors({
		origin: true
	}))
}
apolloServer.applyMiddleware({app, cors: false})

if(process.env.NODE_ENV !== 'development') {
	app.use('/', express.static(path.join(__dirname, '../public')))
	app.get('*', (_req, res) => { res.sendFile(path.join(__dirname, '../public', 'index.html'))})
	console.warn(`> 💻  UI ready on ${process.env.URL}`)
}

app.listen(port, (err) => {
	if (err) throw err
	console.warn(`> 🚀  Apollo GraphQL Server ready on ${process.env.URL}${apolloServer.graphqlPath}`)
	console.warn('> 📝  NOTE: When running `yarn start` be sure to update your NODE_ENV environment variable to `production`')
})

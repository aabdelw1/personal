import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Layout } from '../Layout'
import { GET_COUNTRIES } from '../../utils/graphql/queries'
import CountrySearch from '../components/CountrySearch'

const ExamplesPage = () => {
	const { loading, error, data } = useQuery(GET_COUNTRIES, {
		onCompleted: () => {
			console.log(data)
		}
	})

	return (
		<Layout
			title="Example API"
			content={<CountrySearch countryData={data}/>}
			loading={loading}
			error={error}
		/>
	)
}

export default ExamplesPage

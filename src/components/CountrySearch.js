import React, { useState } from 'react'
import { Pane, Button, Combobox } from 'evergreen-ui'
import { Typography } from '../components/primitives'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CountryDialog from './CountryDialog'
import config from '../apollo/config'

const SearchContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 1rem 5%;

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		width: 50%;
 	}
`
const GraphQlButton = styled(Button)`
	a {
		color: ${({theme}) => theme.trueWhite};
	}
`

const CountrySearch = ({countryData}) => {

	const [showDialog, setShowDialog] = useState(false)
	const [selectedCountry, setSelectedCountry] = useState({})

	return (
		<Pane display="flex" flexDirection="column" width="100vw" paddingY="10rem" justifyContent="center" alignItems="center">
			<Typography variant="h5">Explore Countries</Typography>
			<Typography className="my-2" variant="body">🌎 Public GraphQL API for information about countries</Typography>
			<SearchContainer>
				<Combobox
					placeholder="Select a country to learn more..."
					width="100%"
					initialSelectedItem={null}
					items={ countryData && countryData.countries}
					itemToString={item => item ? item.name : ''}
					onChange={selectedItem => {setShowDialog(true); setSelectedCountry(selectedItem)}}
					autocompleteProps={{popoverMinWidth:50}}
				/>
			</SearchContainer>
			<Pane display="flex">
				{
					process.env.GATSBY_NODE_ENV !== 'production'
						? <GraphQlButton appearance="primary" marginRight=".5rem">
							<a href={`${config[process.env.GATSBY_NODE_ENV]}/graphql`}>
						Explore using GraphQL Playground!
							</a>
						</GraphQlButton>
						:null
				}
			</Pane>
			<CountryDialog 
				showDialog={showDialog} 
				country={selectedCountry} 
				closeDialog={()=>{setShowDialog(false)}}
			/>
		</Pane>
	)
}

CountrySearch.propTypes = {
	countryData: PropTypes.object
}

export default CountrySearch

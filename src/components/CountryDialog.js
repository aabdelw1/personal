import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Pane, Dialog, Heading } from 'evergreen-ui'

const CountryInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  margin: 2rem 0;
`

const CountryDialog = ({ showDialog, closeDialog, country }) => {
	return (
		<Dialog
			isShown={showDialog}
			title={country.name}
			onCloseComplete={() => {closeDialog()}}
			hasFooter={false}
		>
			<Pane
				display="flex"
				flexDirection="column"
				marginX="2rem"
				marginBottom="2rem"
			>
				<Heading>Flag:</Heading> 
				<img src={`https://www.countryflags.io/${country.code}/flat/64.png`} width="64px"/>
				<CountryInfo>
					<div>
						<Heading>Capital:</Heading>
						<div>{country.capital ? country.capital : 'N/A'}</div>
					</div>
					<div>
						<Heading>Country Code:</Heading> 
						<div>{country.code ? country.code : 'N/A'}</div>
					</div>
					<div>
						<Heading>Currency:</Heading> 
						<div>{country.currency ? country.currency : 'N/A'}</div>
					</div>
					<div>
						<Heading>Phone Code:</Heading> 
						<div>{country.phone ? country.phone : 'N/A'}</div>
					</div>
					<div>
						<Heading>Continent:</Heading> 
						<div>{country.continent ? country.continent.name : 'N/A'}</div>
					</div>
				</CountryInfo>
				<a href={`https://en.wikipedia.org/wiki/${country.name}`}>
          Learn More!
				</a>
			</Pane>
		</Dialog>
	)
}

CountryDialog.propTypes = {
	showDialog: PropTypes.bool,
	closeDialog: PropTypes.func,
	country: PropTypes.object
}

export default CountryDialog

const sift = require('sift')
const provinces = require('provinces')
const {continents, countries, languages} = require('countries-list')

const filterToSift = (filter = {}) => {
	return sift(
		Object.entries(filter).reduce(
			(acc, [key, operators]) => ({
				...acc,
				[key]: operatorsToSift(operators)
			}),
			{}
		)
	)
}

const operatorsToSift = (operators) => {
	return Object.entries(operators).reduce(
		(acc, [operator, value]) => ({
			...acc,
			['$' + operator]: value
		}),
		{}
	)
}

const Example = {
	Country: {
		capital: country => country.capital || null,
		currency: country => country.currency || null,
		continent: ({continent}) => ({
			code: continent,
			name: continents[continent]
		}),
		languages: country =>
			country.languages.map(code => {
				const language = languages[code]
				return {
					...language,
					code
				}
			}),
		states: country =>
			provinces.filter(province => province.country === country.code)
	},
	State: {
		code: state => state.short,
		country: state => countries[state.country]
	},
	Continent: {
		countries: continent =>
			Object.entries(countries)
				.filter(entry => entry[1].continent === continent.code)
				.map(([code, country]) => ({
					...country,
					code
				}))
	},
	Language: {
		rtl: language => Boolean(language.rtl)
	},
	Query: {
		continent(parent, {code}) {
			const name = continents[code]
			return (
				name && {
					code,
					name
				}
			)
		},
		continents: (parent, {filter}) =>
			Object.entries(continents)
				.map(([code, name]) => ({
					code,
					name
				}))
				.filter(filterToSift(filter)),
		country(parent, {code}) {
			const country = countries[code]
			return (
				country && {
					...country,
					code
				}
			)
		},
		countries: (parent, {filter}) =>
			Object.entries(countries)
				.map(([code, country]) => ({
					...country,
					code
				}))
				.filter(filterToSift(filter)),
		language(parent, {code}) {
			const language = languages[code]
			return (
				language && {
					...language,
					code
				}
			)
		},
		languages: (parent, {filter}) =>
			Object.entries(languages)
				.map(([code, language]) => ({
					...language,
					code
				}))
				.filter(filterToSift(filter))
	}
}

module.exports = Example
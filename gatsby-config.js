require('dotenv').config({
	path: '.env',
})

module.exports = {
	siteMetadata: {
		title: 'ammar-website',
		description: 'Starter repository for a Gatsby site communicating with a GraphQL backend. This project uses Apollo Client to request and cache your data, as well as update your UI.',
		author: '@ammar',
	},
	flags: {
		DEV_SSR: true
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'UA-XXXXXXXXX-X',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-emotion',
			options: {
				// Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
				// The values for each key in this example are the defaults the plugin uses.
				sourceMap: true,
				autoLabel: 'dev-only',
				labelFormat: '[local]',
				cssPropOptimization: true,
			},
		},
		{
			resolve: 'gatsby-plugin-styled-components',
			plugins: [
				['babel-plugin-styled-components', {
					pure: true,
					ssr: true,
					displayName: true,
					fileName: true,
					minify: true,
					transpileTemplateLiterals: true
				}]
			]
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/assets/img`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /svgs/,
				}
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/assets/img/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		// 'gatsby-plugin-offline',
		'gatsby-plugin-postcss'
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}

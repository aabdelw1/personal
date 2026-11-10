/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { goatcounterEndpoint } from './src/analytics/goatcounter'

export { wrapRootElement } from './src/apollo/wrap-root-element'
/* eslint-disable react/no-danger */
// import React from 'react'
// import { extractStyles } from 'evergreen-ui'

// exports.onRenderBody = ({ setHeadComponents }) => {
// 	// Get the css and hydration script from Evergreen.
// 	const { css, hydrationScript } = extractStyles()

// 	// Takes an array of components as its first argument which are added to
// 	// the headComponents array which is passed to the html.js component.
// 	setHeadComponents([
// 		// We need a key here for Gatsby to stop complaining.
// 		<React.Fragment key="evergreen-ssr">
// 			<style id="evergreen-css" dangerouslySetInnerHTML={{ __html: css }} />
// 			{hydrationScript}
// 		</React.Fragment>,
// 	])
// }

// Load the GoatCounter script on every page. Page views are sent from
// gatsby-browser.js on each route change, so automatic counting is turned off here.
export const onRenderBody = ({ setPostBodyComponents }) => {
	if (process.env.NODE_ENV !== 'production' || !goatcounterEndpoint) return
	setPostBodyComponents([
		<script
			key="goatcounter"
			async
			src="https://gc.zgo.at/count.js"
			data-goatcounter={goatcounterEndpoint}
			data-goatcounter-settings='{"no_onload": true}'
		/>,
	])
}

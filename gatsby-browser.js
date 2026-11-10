/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/assets/css/globals.css'
import './src/assets/css/normalize.css'
import './node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'
import './node_modules/@blueprintjs/core/lib/css/blueprint.css'
import { goatcounterEndpoint } from './src/analytics/goatcounter'
export { wrapRootElement } from './src/apollo/wrap-root-element'

// Count a page view on the first load and on every client-side navigation.
// The GoatCounter script loads async, so retry briefly until it is ready.
export const onRouteUpdate = ({ location }) => {
	if (process.env.NODE_ENV !== 'production' || !goatcounterEndpoint) return
	const path = location.pathname + location.search + location.hash
	let tries = 0
	const send = () => {
		if (window.goatcounter && window.goatcounter.count) {
			window.goatcounter.count({ path })
		} else if (tries++ < 20) {
			setTimeout(send, 250)
		}
	}
	send()
}

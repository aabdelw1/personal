// GoatCounter: privacy-friendly, cookie-free page view counting.
// Set this to the code you picked when signing up at https://www.goatcounter.com
// (e.g. 'ammar' for https://ammar.goatcounter.com). Leave it empty to disable tracking.
export const GOATCOUNTER_CODE = process.env.GATSBY_GOATCOUNTER_CODE || ''

export const goatcounterEndpoint = GOATCOUNTER_CODE
	? `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
	: null

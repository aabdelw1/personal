// import './styles.css'

//Thank you for your time :) 

// ignore this
// document.getElementById('app').innerHTML = '<div></div>'

// For a given property:
// OCCUPANCY RATE = SUM(occupied SF) / Total SF

// Goal: write a function to calculate the occupancy rate over time

const computeOccupancyRateOverTime = (leases, dates, totalSF) => {
  

	const occupancyRate = []
	for(var i = 0; i < dates.length; i++){
		let temp = 0
		for(var j = 0; j < leases.length; j++){
			if(dates[i] >= leases[j].start && dates[i] < leases[j].end) {
				temp = leases[j].sf + temp
			}
		}
		occupancyRate.push([dates[i], temp/totalSF])
	}
	console.log(occupancyRate)
	return occupancyRate
}

//////////// EXAMPLE INPUTS ////////////

// list of leases for suites that are occupied
const leases = [
	{ start: '2020-01-01', end: '2022-01-01', sf: 1000, id: 'abcd' },
	{ start: '2020-05-01', end: '2021-05-01', sf: 5000, id: 'dcba' },
	{ start: '2020-12-01', end: '2021-12-01', sf: 10000, id: 'badc' }
]

// dates that should be returned
const dates = ['2020-03-31', '2020-06-30', '2020-09-30', '2020-12-31']

// total SF of the property
const totalSF = 20000

//////////// EXAMPLE OUTPUT ////////////

// example response
const expectedResponse = [
	['2020-03-31', 0.05],
	['2020-06-30', 0.3],
	['2020-09-30', 0.3],
	['2020-12-31', 0.8]
]

computeOccupancyRateOverTime(leases, dates, totalSF)

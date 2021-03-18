import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Context = React.createContext({})

const Provider = (props) => {
	const [activeCard, setActiveCard] = useState(null)

	return (
		<Context.Provider value={[activeCard, setActiveCard]}>
			{props.children}
		</Context.Provider>
	)
}

Provider.propTypes = {
	children: PropTypes.any
}

export default { Context, Provider }

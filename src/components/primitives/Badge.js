import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IntentTypes } from '../../../utils/models'

const Styled_ = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    font-size: .75rem;
    padding: .675rem;
		color: ${({theme}) => theme.white};
		background: ${({theme, intent}) => intent ? theme[intent] : theme.grey};
    border: none;
    ${({theme, intent, outline}) => outline && `
      background: ${theme ? theme.white : '#FFF'};
      border: 2px solid ${intent ? theme[intent] : theme.grey};
      color: ${intent ? theme[intent] : theme.grey_6};
    `};
  }
`

const _ = ({ value, ...props }) => (
	<Styled_ {...props}>
		{value}
	</Styled_>
)
_.propTypes = {
	/** Intent of Badge, look to the intents options under the UTILS directory */
	intent: PropTypes.oneOf(IntentTypes),
	/** Intent of Badge, look to the intents options under the UTILS directory */
	outline: PropTypes.bool,
	/** */
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired
}
_.defaultProps = {
	intent: 'blue',
	outline: false
}

export default _

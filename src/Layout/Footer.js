import React from 'react'
import styled from 'styled-components'

const Styled_ = styled.div`
  && {
		color: ${({theme}) => theme.grey};
	}
	padding: 0.5rem 0 1.5rem;
`

const _ = (props) => (
	<Styled_ {...props} >
		<div className="flex flex-row justify-center mt-3">
			<div style={{'margin-right': '0.5rem'}}>Made with ❤️ </div> 
			<div>and ☕️</div> 
		</div>
	</Styled_>
)
_.propTypes = {

}

export default _

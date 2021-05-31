import React from 'react'
import styled from 'styled-components'

const Styled_ = styled.div`
  && {
		color: ${({theme}) => theme.grey};
	}
`

const _ = (props) => (
	<Styled_ {...props} className="pb-8">
		<div className="flex flex-row justify-center mt-3">
      Made with ❤️ and ☕️
		</div>
	</Styled_>
)
_.propTypes = {

}

export default _

import React from 'react'
import styled from 'styled-components'
import { Icon } from '@blueprintjs/core'

const ToggleSlot = styled.div`
  position: relative;
  height: 2rem;
  width: 6rem;
  border: 3px solid #e4e7ec;
  border-radius: 3rem;
  background-color: #374151;
  transition: background-color 250ms;
`

const ToggleButton = styled.div`
  transform: translate(4rem, .2em);
  position: absolute;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
`

const SunIcon = styled(Icon)`
  &&{
    position: absolute;
    color: ${({theme}) => theme.trueWhite};
  } 
`
const SunWrapper = styled.div`
  position: absolute;
  opacity: 1;
  transform: translate(.6rem, .2rem) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
`

const MoonIcon = styled(Icon)`
  position: absolute;
  color: #374151;
`

const MoonWrapper = styled.div`
  position: absolute;
  height: 2rem;
  width: 2rem;
  opacity: 0;
  transform: translate(4rem, .2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
`


const Toggle = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  :checked ~ ${ToggleSlot} {
    background-color: ${({theme}) => theme.trueWhite};
  }

  :checked ~ ${ToggleSlot} ${ToggleButton} {
    background-color: #ffeccf;
    transform: translate(.4rem, .2em);
  }

  :checked ~ ${ToggleSlot} ${SunWrapper} {
    opacity: 0;
    transform: translate(4rem, .2em) rotate(0deg);
  }

  :checked ~ ${ToggleSlot} ${MoonWrapper} {
  opacity: 1;
  transform: translate(4.3rem, .2rem) rotate(-15deg);
}
`

const _ = (props) => {
	return (
		<label {...props}>
			<Toggle type='checkbox'/>
			<ToggleSlot>
				<SunWrapper>
					<SunIcon icon="flash" iconSize="1rem"/>
				</SunWrapper>
				<ToggleButton />
				<MoonWrapper>
					<MoonIcon icon="moon" iconSize="1rem"/>
				</MoonWrapper>
			</ToggleSlot>
		</label>
	)
}

export default _

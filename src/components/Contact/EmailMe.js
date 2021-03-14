import React, { useContext, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'


const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 1px 6px #dddddd,  0 -2px 3px #dddddd;
	background-color: #fafafa;
`

const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
	max-width: 80rem;
	display:flex;
	justify-content:center;
	height:100%;
`

const Column = styled.div`
  display:flex;
	flex:1;
  :first-of-type {
		margin-right: 2.5rem;
    align-items: center;

  }
  :last-of-type {
		align-items: center;
		justify-content: center;
  }
`

const Rows = styled.div`


`

const NameEmailInput = styled.input`
	width:100%;
	resize: none;
	font-size: 20px;
	justify-content: center;
	padding: 7px 10px;
	height:3rem;
	margin-bottom: 1rem;
	margin-top:0.5rem;
	border-radius: .2rem;
	box-shadow: inset 0px 1px 1px 0px #dddddd;
	border: 0.5px solid #dddddd;
`

const Fields = styled(Typography)`
	font-size: 22px;
  color:#000;

`


const EmailMe = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [aboutPos, setAboutPos] = useState('30rem')
	const [picturePos, setPicturePos] = useState('4rem')
	const [opac, setOpac] = useState('0')
	const [theme] = themeCtx

	useEffect(() => {
		if(true){
			setPicturePos('0rem') 
			setAboutPos('0rem')
			setOpac('1')
		}
	}, [])

  
	return (
		<Container>
			<MiddleConsole>
				<Column>
					<Pane display="flex" flexDirection="column" width="100%">
						<Pane>
							<Fields weight="thin">Your name:</Fields>
							<NameEmailInput/>
						</Pane>
						<Pane marginTop="1rem">
							<Fields weight="thin">Your email:</Fields>
							<NameEmailInput/>
						</Pane>
				 </Pane>
				</Column>
				<Column>
				</Column>
			</MiddleConsole>
		</Container>
	)
}

export default EmailMe
import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import {  Pane, toaster } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import { useInView } from 'react-intersection-observer'



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

const AnimationBox = styled.div`
	display:flex;
	width:100%;
	margin-top: ${props => props.pos};
	opacity: ${props => props.opac};
	transition: margin-top, opacity;
	transition-duration: 0.6s;
	transition-delay: 0s;
	transition-timing-function: ease-in-out; 
`

const Column = styled.div`
	flex:1;
  :first-of-type {
		margin-right: 2.5rem;
  }
`

const Row = styled.div`
	display: flex;
	flex: 1;
	:first-of-type{
		align-items: flex-end;
		height:25%;
	}
	:last-of-type{
		height:75%;
	}
`

const Row2 = styled.div`
	display: flex;
	:first-of-type{
		align-items: flex-end;
		height:33.33%;
	}
	:nth-of-type(2){
		margin-top:0.65rem;
		height:25.667%;
	}
	:nth-of-type(3){
		justify-content:flex-end;
	}
	
`

const NameEmailInput = styled.input`
	width:100%;
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

const Header = styled(Typography)`
  color: #000;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
`

const MessageBox = styled.textarea`
	  width: 100%;
    height: 100%; 
		resize: none;
		font-size: 20px;
		justify-content: center;
		padding: 7px 10px;
    box-sizing: border-box;
		border-radius: .2rem;
		box-shadow: inset 0px 1px 1px 0px #dddddd;
		border: 0.5px solid #dddddd;
`

const Send = styled.button`
	transition: background-color color;
	transition-duration: 0.2s;
	border-radius: .2rem;
	background-color: #1C1C1E;
	border: 0.5px solid #dddddd;
	padding:.8rem;
	font-size: 20px;
	font-weight: 250; 
	color: #fafafa;
	margin-top: 2rem;
	:hover{
		cursor: pointer;
		background-color: #fafafa;
		color: #1C1C1E;
	}

`


const EmailMe = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, seMessage] = useState('')
	const [containerOffset, setContainerOffset] = useState('10rem')
	const [opac, setOpac] = useState('0')
	const [ref, inView] = useInView()
	const [theme] = themeCtx

	const sendEmail = () => {
		if(name == '' || email == '' || message == ''){
			toaster.warning('Missing Field')
		}
	}

	useEffect(() => {
		if(inView){
			setContainerOffset('0rem') 
			setOpac('1')
		}
	}, [inView])
  
	return (
		<Container>
			<MiddleConsole>
				<AnimationBox ref={ref} pos={containerOffset} opac={opac}>
					<Column>
						<Row><Header weight="normal">Send me an email</Header></Row>
						<Row>
							<Pane display="flex" flexDirection="column" width="100%" marginTop="1.5rem">
								<Pane>
									<Fields weight="thin">Your name:</Fields>
									<NameEmailInput onChange={e => setName(e.target.value)}/>
								</Pane>
								<Pane marginTop="0.5rem">
									<Fields weight="thin">Your email:</Fields>
									<NameEmailInput onChange={e => setEmail(e.target.value)}/>
								</Pane>
							</Pane>
						</Row>
					</Column>
					<Column>
						<Row2><Pane marginTop="-1rem"><Fields weight="thin">Your message:</Fields></Pane></Row2>
						<Row2><MessageBox onChange={e => seMessage(e.target.value)}/></Row2>
						<Row2><Send onClick={() => sendEmail()}>Send Email</Send></Row2>
					</Column>
				</AnimationBox>
			</MiddleConsole>
		</Container>
	)
}

export default EmailMe
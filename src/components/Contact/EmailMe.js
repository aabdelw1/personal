import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { toaster } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import { useInView } from 'react-intersection-observer'
import emailjs, { init }  from 'emailjs-com'

const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 1px 6px #dddddd,  0 -2px 3px #dddddd;
	background-color: #fafafa;
	display:flex;
	@media (max-width: 992px) { 
		max-height: unset;
		height:unset;
 	}
`

const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
	display:flex;
	justify-content:center;
	height:100%;
	flex-wrap: wrap;
	@media (max-width: 992px) { 
			width:100%;
			padding: 0 3.5rem 0 3.5rem;
 		}
`

const AnimationBox = styled.div`
	display:flex;
	width:100%;
	margin-top: ${props => props.pos};
	opacity: ${props => props.opac};
	transition: margin-top, opacity;
	transition-duration: 0.6s;
	transition-delay: ${props => props.mobile};
	transition-timing-function: ease-in-out; 
	@media (max-width: 992px) { 
			flex-direction: column;
 		}
`

const Column = styled.div`
	flex:1;
  :first-of-type {
		margin-right: 3.5rem;
				@media (max-width: 992px) { 
				margin-right:unset; 
 		} 
  }
	:last-of-type {
		/* @media (max-width: 992px) { 
			margin-right:2.5rem;
 		} */
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
	@media (max-width: 992px) { 
			margin-bottom:5rem;
			margin-top:1rem;
  	}
`

const Pane = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 1.5rem;
`



const EmailMe = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [containerOffset, setContainerOffset] = useState('10rem')
	const [opac, setOpac] = useState('0')
	const isMobile = useMediaQuery({ maxWidth: 992 })
	const [ref, inView] = useInView()
	const [theme] = themeCtx
	init('user_PAAWqM369hb6sMZg93DYp')


	const sendEmail = () => {
		if(name == '' || email == '' || message == ''){
			toaster.warning('Missing Field')
		} else{
			emailjs.send(
				'service_utp8oc6',
				'template_wz8walk',
				{
					from_name: name + ' - ' + email,
					to_name: 'Ammar',
					subject: '',
					message: message,
				},
				'user_PAAWqM369hb6sMZg93DYp'
			)			.then((result) => {
				toaster.success('Email Sent!')
			}, (error) => {
				toaster.error('Something went wrong, email not sent🙁')
			})
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
				<AnimationBox ref={ref} pos={containerOffset} opac={opac} mobile={isMobile ? 0.3 + 's': 1.0 + 's'}>
					<Column>
						<Row><Header weight="normal">Send me an email</Header></Row>
						<Row>
							<Pane>
								<div>
									<Fields weight="thin">Your name:</Fields>
									<NameEmailInput onChange={e => setName(e.target.value)}/>
								</div>
								<div style={{'margin-top':'0.5rem'}}>
									<Fields weight="thin">Your email:</Fields>
									<NameEmailInput onChange={e => setEmail(e.target.value)}/>
								</div>
							</Pane>
						</Row>
					</Column>
					<Column>
						<Row2><Pane marginTop="-1rem"><Fields weight="thin">Your message:</Fields></Pane></Row2>
						<Row2><MessageBox onChange={e => setMessage(e.target.value)}/></Row2>
						<Row2><Send onClick={() => sendEmail()}>Send Email</Send></Row2>
					</Column>
				</AnimationBox>
			</MiddleConsole>
		</Container>
	)
}

export default EmailMe
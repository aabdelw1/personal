import React, { useContext, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import CreatorCoderImg from '../../assets/img/creator_coder.png'
import useOnScreen from '../primitives/UseOnScreen'



const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 2px 3px #dddddd,  0 -2px 3px #dddddd;
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
  
	justify-content:center;
	align-items:center;
  :last-of-type {
		justify-content: flex-end;
	}
  :first-of-type {
		justify-content: flex-start;
  }
`

const AnimationBox = styled.div`
	display:flex;

	margin-top: ${props => props.pos};
	opacity: ${props => props.opac};
	transition: margin-top, opacity;
	transition-duration: 0.6s;
	transition-delay: .6s;
	transition-timing-function: ease-in-out; 
`

const ImgBox = styled.div`
  /* max-width:35vh; */
`

const Header = styled(Typography)`
  color: #000;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  margin: 25px 0;
`

const Description = styled(Typography)`
  color: #000;
  font-weight: 200;
	font-size: 20px;
  margin-bottom:0.9rem;
`


const CreatorCoder = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx
	const [containerOffset, setContainerOffset] = useState('10rem')
	const [opac, setOpac] = useState('0')

	const ref = useRef()
	const isVisible = useOnScreen(ref)


	useEffect(() => {
		if(isVisible){
			setContainerOffset('0rem') 
			setOpac('1')
		}
	}, [isVisible])


  
	return (
		<Container ref={ref}>
			<MiddleConsole>
				<AnimationBox pos={containerOffset} opac={opac}>
					<Column>
						<Pane display="flex" flexDirection="column">
							<Header weight="normal">Part Creator</Header>
							<Description>UI/UX design</Description>
							<Description>&quot;Borrowing&quot; ideas</Description>
							<Description>Drawing attention</Description>
							<Description>Free hand sketching</Description>
							<Description>Musician</Description>
						</Pane> 
					</Column> 
					<Column>
						<ImgBox>
							<img src={CreatorCoderImg}/>
						</ImgBox>
					</Column>
					<Column>
						<Pane display="flex" flexDirection="column">
							<Header weight="normal">Part Coder</Header>
							<Description>Front-end development</Description>
							<Description>HTML / CSS / JS</Description>
							<Description>Python / ML</Description>
							<Description>Backend design</Description>
							<Description>That 💡 moment</Description>
						</Pane>
					</Column> 
				</AnimationBox>
			</MiddleConsole>
		</Container> 
	)
}

export default CreatorCoder
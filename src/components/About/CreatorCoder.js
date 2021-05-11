import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Pane } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import CreatorCoderImg from '../../assets/img/creator_coder.png'
import { useInView } from 'react-intersection-observer'




const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 2px 3px #dddddd,  0 -2px 3px #dddddd;
	background-color: #fafafa;

	@media (max-width: 768px) { 
		max-height: unset;
		height:unset;
 	}
`

const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
	max-width: 80rem;
	display:flex;
	justify-content:center;
	height:100%;
	justify-content: flex-start;
		@media (max-width: 768px) { 
			width:unset;
			max-width: unset;
			justify-content:center;
 	}

`
const AnimationBox = styled.div`
	@media (max-width: 768px) { 
		max-width: 768px;
		flex-direction: column;
		img {
			max-width: 20rem;
		}
 	}
	display:flex;
	margin-top: ${props => props.pos};
	opacity: ${props => props.opac};
	transition: margin-top, opacity;
	transition-duration: 0.6s;
	transition-delay: 0s;
	transition-timing-function: ease-in-out; 
`
const Column = styled.div`
	display:flex;
	flex:1;
	justify-content:center;
	align-items:center;

	@media (max-width: 768px) { 
		margin-bottom:1rem;
 	}
  :first-of-type {
		justify-content: flex-start;
		@media (max-width: 768px) { 
			justify-content:center;
 	}
  }
	:last-of-type {
		justify-content: flex-end;
		@media (max-width: 768px) { 
			justify-content:center;
		}
	}

`



const ImgBox = styled.div`
  /* max-width:35vh; */
`

const Header = styled(Typography)`
  color: #000;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  margin: 25px 0;
	@media (max-width: 768px) { 
		text-align:center;
	}

`

const Description = styled(Typography)`
  color: #000;
  font-weight: 200;
	font-size: 20px;
  margin-bottom:0.9rem;

	@media (max-width: 768px) { 
		text-align:center;
	}
`


const CreatorCoder = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx
	const [containerOffset, setContainerOffset] = useState('10rem')
	const [opac, setOpac] = useState('0')
	const [ref, inView] = useInView()

	useEffect(() => {
		if(inView){
			setContainerOffset('0rem') 
			setOpac('1')
		}
	}, [inView])


  
	return (
		<Container >
			<MiddleConsole>
				<AnimationBox pos={containerOffset} opac={opac}>
					<Column>
						<Pane display="flex" flexDirection="column">
							<Header weight="normal"><span ref={ref}>Part Creator</span></Header>
							<Description>UI/UX design</Description>
							<Description>&quot;Borrowing&quot; ideas</Description>
							<Description>Drawing attention </Description>
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
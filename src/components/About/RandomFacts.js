import React, { useContext, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Pane } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import Ghidorah from '../../assets/img/ghidorah.png'
// import useOnScreen from '../primitives/UseOnScreen'
import { useInView } from 'react-intersection-observer'


const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 4px 6px #dddddd;
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
	transition: margin-left, opacity;
	transition-duration: 0.6s;
	transition-delay: 0s;
	transition-timing-function: ease-out; 
  :first-of-type {
		margin-left: ${props => props.pos};
		opacity: ${props => props.opac};
    width: 68%;
    justify-content: flex-end;
		align-items: flex-end;
  }
  :last-of-type {
		margin-left: ${props => props.pos};
    width: 32%;
		align-items: center;
		justify-content: center;
  }
`

const ImgBox = styled.div`
  max-width:80vh;

`

const Header = styled(Typography)`
  color: #000;
  font-size: 30px;
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


const RandomFacts = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [ref, inView] = useInView()
	const isMobile = useMediaQuery({ maxWidth: 768 })
	const [theme] = themeCtx

	const [containerOffset, setContainerOffset] = useState('20rem')
	const [opac, setOpac] = useState('0')


	useEffect(() => {
		if(inView){
			setContainerOffset('0rem') 
			setOpac('1')
		}
	}, [inView]) 

	function renderImage () {
		return (
			<Column pos={'-' + containerOffset} opac={opac} >
				<ImgBox>
					<img src={Ghidorah}/>
				</ImgBox>
			</Column>
		)

	}

	function renderFacts () {
		return (
			<Column pos={containerOffset}>
				<Pane display="flex" flexDirection="column">
					<Header weight="normal">Random Facts</Header>
					<Description>I play a lot of piano</Description>
					<Description>I like to draw</Description>
					<Description><span ref={ref}>I make the best cookies</span></Description>
					<Description>I&#39;m a neat freak</Description>
					<Description>I love snowbording</Description>
					<Description>I love sci fi movies</Description>
					<Description>I&#39;m addicted to Chick-fil-A</Description>
				</Pane>
			</Column> 

		)
	}

	return (
		<Container>
			<MiddleConsole>
				{
					renderImage()
				}
				{
					renderFacts()
				}
				{/* {
					!isMobile ? renderImage() : renderFacts()
				}
				{
					!isMobile ? renderFacts() : renderImage()
				} */}
			</MiddleConsole>
		</Container> 
	)
}

export default RandomFacts
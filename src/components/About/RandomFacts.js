import React, { useContext, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import Ghidorah from '../../assets/img/ghidorah.png'
// import useOnScreen from '../primitives/UseOnScreen'
import { useInView } from 'react-intersection-observer'


const Container = styled.div`
  max-height: 38rem;
  height:38rem;
	box-shadow: 0 ${props => props.shadow} 6px #dddddd;
	@media (max-width: 992px) { 
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
	@media (max-width: 992px) { 
		/* max-width: 992px; */
			width:unset;
			max-width: unset;
			flex-direction: column;
 		}
`

const Column = styled.div`
  display:flex;
	transition: margin-left, opacity;
	transition-duration: 0.6s;
	transition-delay: 0s;
	transition-timing-function: ease-out; 
	@media (max-width: 992px) { 
		margin-top:1rem;
 	}
  :first-of-type {
		margin-left: ${props => props.pos};
		opacity: ${props => props.opac};
    width: 68%;
    justify-content: flex-end;
		align-items: flex-end;
		@media (max-width: 992px) { 
			width:unset;
			border-bottom: 1px solid #dddddd;
			margin:2rem;
			justify-content:center;
  	}
	}
  :last-of-type {
		margin-left: ${props => props.pos};
    width: 32%;
		align-items: center;
		justify-content: center;
		@media (max-width: 992px) { 
			width:unset;
			margin-bottom: 1rem;
  	}
  }
`

const ImgBox = styled.div`
  max-width:80vh;
	@media (max-width: 992px) { 
		max-width:70vh;
 	}
`

const Header = styled(Typography)`
  color: #000;
  font-size: 30px;
  margin: 25px 0;
	@media (max-width: 992px) { 
		text-align:center;
	}
`

const Description = styled(Typography)`
  color: #000;
  font-weight: 200;
	font-size: 20px;
  margin-bottom:0.9rem;
	@media (max-width: 992px) { 
		text-align:center;
	}
`

const Pane = styled.div`
	display: flex;
	flex-direction: column;
`

const RandomFacts = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [ref, inView] = useInView()
	const isMobile = useMediaQuery({ maxWidth: 992 })
	const [theme] = themeCtx

	const [containerOffset, setContainerOffset] = useState('20rem')
	const [opac, setOpac] = useState('0')


	useEffect(() => {
		if(inView){
			setContainerOffset('0rem') 
			setOpac('1')
		}
	}, [inView]) 

	return (
		<Container shadow= {isMobile ? '1px' : '4px'}>
			<MiddleConsole>
				<Column pos={'-' + containerOffset} opac={opac} >
					<ImgBox>

						<img src={Ghidorah}/> 
					</ImgBox>
				</Column>
				<Column pos={containerOffset}>
					<Pane>
						{isMobile && <Header weight="normal"><span ref={ref}>Random Facts </span></Header> }
						{!isMobile && <Header weight="normal">Random Facts</Header> }
						<Description>I play a lot of piano</Description>
						<Description>I like to draw</Description>
						{ !isMobile && <Description><span ref={ref}>I make the best cookies</span></Description>}
						{ isMobile && <Description>I make the best cookies</Description>}
						<Description>I&#39;m a neat freak</Description>
						<Description>I love snowboarding</Description>
						<Description>I love sci fi movies</Description>
						<Description>I&#39;m addicted to Chick-fil-A</Description>
					</Pane>
				</Column> 
			</MiddleConsole>
		</Container>
	)
}

export default RandomFacts
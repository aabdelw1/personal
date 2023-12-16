import React, { useContext, useRef, useEffect, useState} from 'react'
// import useMouse from '@react-hook/mouse-position'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import { useInView } from 'react-intersection-observer'

// import useMousePosition from '../primitives/useMousePosition'


const AboutMeContainer = styled.div`
  box-shadow: 0 2px 3px #dddddd;
  max-height: 40rem;
  height:40rem;
	@media (max-width: 1140px) { 
		height: 56vw;
 	}
`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:70rem;
	display:flex;
	justify-content:center;
	position: relative;
	height:100%;
	@media (max-width: 1140px) { 
			width:unset;
 		}
`

const Column = styled.div`
	display:flex;
	flex:1;
	align-items:center;
	transition: opacity 0.5s 1.5s ease-in-out;
	:nth-of-type(1){
		opacity:${props => props.opacity};
	}
	:nth-of-type(2){
		opacity:${props => props.opacity};
	}
	:last-of-type{
		opacity:${props => props.opacity};	
		justify-content:flex-end;
	}
`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 65px !important;
  color: ${({theme}) => theme.grey_6};;
  color: #000000;
	 @media (max-width: 992px) { 
			font-size: 6vw !important; 
	 }
  p {
    display: inline;
    font-weight: 400;
  }
`

const Description = styled(Typography)`
  font-size: 18px;
  line-height:30px;
  color:#000;
  width:19rem;
	margin-top:1rem;
	/* background-color: orange; */

	@media (max-width: 992px) { 
			font-size: 2vw !important; 
			padding-left: ${props => props.paddingL};
			padding-right: ${props => props.paddingR};
			}
	 }
`

const Pane = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	margin-left:2rem;
	text-align: left;
	@media (max-width: 992px) { 
		padding-right: 2rem;
	}
`
const Pane2 = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	:last-of-type{
		margin-right:2rem;
		text-align: right;
	}
`

const HomeText = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [ref, inView] = useInView()
	const [opac, setOpac] = useState(['0', '0'])
	const isMobile = useMediaQuery({ maxWidth: 768 })
	const isTablet = useMediaQuery({ maxWidth: 992 })

	const [theme] = themeCtx

	useEffect(() => {
		if(inView){
			setOpac(['1', '1'])
		}
	}, [inView])

	return (
		<AboutMeContainer ref={ref}>
			<MiddleConsole>
				<Column opacity={opac[0]}>
					<Pane>
						<AboutBlock weight="bold">creator</AboutBlock>
						{!isMobile && <Description weight="thin" paddingR="3.1rem">Artistic designer with a drive to create simple yet stunning user expirences.</Description> }
					</Pane>
				</Column>
				<Column opacity={opac[1]}>
					<Pane2>
						<AboutBlock weight="bold"><p>&#60;</p>coder<p>&#62;</p></AboutBlock>
						{!isMobile &&<Description weight="thin" paddingL="3.1rem">Full Stack Web Developr who focuses on writing elegant and efficient code.</Description> }
					</Pane2>
				</Column>
			</MiddleConsole>
		</AboutMeContainer>
	)
}

export default HomeText
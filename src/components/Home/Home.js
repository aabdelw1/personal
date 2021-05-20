import React, { useContext, useRef, useEffect, useState} from 'react'
import  useMouse  from '@react-hook/mouse-position'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Pane } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import AmmarCoder from '../../assets/img/home/coder_ammar2.png'
import AmmarCreator from '../../assets/img/home/creator_ammar2.png'
import useMousePosition from '../primitives/useMousePosition'


const AboutMeContainer = styled.div`
  box-shadow: 0 2px 3px #dddddd;
  max-height: 40rem;
  height:40rem;
	@media (max-width: 1140px) { 
		height: 56vw;
		/* height:20rem; */
 	}
`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* width:90rem; */
	max-width: 90rem;
	display:flex;
	justify-content:center;
	position: relative;
	height:100%;
	transition: align-items 0.8s ease-out;

	@media (max-width: 1350px) { 
			/* width:126vh; */
 		}
`

const Column = styled.div`
	display:flex;
	flex:1;
	justify-content:center;
	align-items:center;
	transition: opacity 0.5s;
	/* @media (max-width: 650px) { 
			align-items:unset;
 	} */

	:nth-of-type(2){
		opacity:${props => props.opacity};

	}
	:last-of-type{
		opacity:${props => props.opacity};
	}

`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 4.5vw !important;
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
  width:18rem;
	margin-top:1rem;
	@media (max-width: 992px) { 
			font-size: 2vw !important; 
	 }
`

const GraphicContainer = styled.div`
		display: flex;
		flex-direction:row;
		justify-content: center;
		height:100%;
    position: absolute;
    top: 0;
		/* justify-content:center; */
		
		/* @media (max-width: 992px) { 
				align-items:flex-end;
 			} */
`

const ImageColumn = styled.div`
	display:flex;
	justify-content:center;
	:first-of-type,
	:last-of-type {
		width:50%;
		img {
			transition: object-position 0.8s ease-out;
			height: 40rem;
			object-fit:cover;
			object-position: ${props => props.postion};
			/* @media (max-width: 1350px) { 
				height:unset;
				max-height:20rem;
				object-fit:unset;
 			}
			 @media (max-width: 650px) { 
				object-position: unset;
 			} */
		}
	}
`

const Home = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [imgWidths, setImgWidths] = useState([50, 50])
	const [imgPostions, setImgPostions] = useState([19.5, -25])
	const [opacity, setOpacity] = useState([1,1])
	const [positionSide, setPostionSide] = useState()
	const { x, y } = useMousePosition()
	const hasMovedCursor = typeof x === 'number' && typeof y === 'number'
	const isTablet = useMediaQuery({ maxWidth: 992 })
	const isMobile = useMediaQuery({ maxWidth: 768 })

	const [theme] = themeCtx
	const ref = useRef(null)
	const mouse = useMouse(ref, {
		enterDelay: 100,
		leaveDelay: 100,
	})

	const midpoint =  mouse.elementWidth/2
	const width = mouse.elementWidth
	const splits = [[0, width/2], [width/2, width]]

	const animateWidth = () => {
		if( 0 < mouse.x && mouse.x < midpoint){
			setPostionSide('Left')
		} else if (midpoint < mouse.x && mouse.x < width){
			setPostionSide('Right')
		}

		const shiftEnd = midpoint*0.1
		const shiftRange = (midpoint - shiftEnd)
		const shiftAspect = 100 / (shiftRange)

		// if ( shiftEnd < mouse.x && mouse.x < (width - shiftEnd)){
		// 	if(positionSide == 'Left'){
		// 		const LeftWidth = (((midpoint - mouse.x) * shiftAspect) +  50).toFixed(1)
		// 		setImgWidths([+LeftWidth, 100 - LeftWidth])
		// 	} else if (positionSide == 'Right'){
		// 		const RightWidth = (((mouse.x - midpoint) * shiftAspect) + 50).toFixed(1)
		// 		setImgWidths([100 - RightWidth, +RightWidth])
		// 	}
		// }
		const postionAspectL = 15 / (shiftRange)
		const postionAspectR = -15 / (shiftRange)

		if (0 < mouse.x && mouse.x < width){
			const opacity =  (1 - ((midpoint - mouse.x) * (2/shiftRange))).toFixed(1)
			if(positionSide == 'Left'){
				const LeftPostion = (20 + ((midpoint - mouse.x) * postionAspectL)).toFixed(1)
				const RightPostion = (- 25 - ((midpoint - mouse.x) * postionAspectR) ).toFixed(1)
				setImgPostions([+LeftPostion, +RightPostion])
				setOpacity([1, +opacity])
			} else if(positionSide == 'Right'){
				const LeftPostion = (20 + ((midpoint - mouse.x) * postionAspectL)).toFixed(1)
				const RightPostion = (-25 - ((midpoint - mouse.x) * postionAspectR) ).toFixed(1)
				setImgPostions([+LeftPostion, +RightPostion])
				setOpacity([2.5-opacity, 1])
			} 
		}
	}

	useEffect(() => {
		if(mouse.elementWidth != null){
			animateWidth()
		}
		else {
			setImgWidths([50, 50])
			setImgPostions([20, -25])
			setOpacity([1,1])
		}
	}, [mouse.x])

	return (
		<AboutMeContainer ref={ref} onMouseEnter>
			<MiddleConsole>
				<GraphicContainer>
					{/* <ImageColumn width={imgWidths[0].toString() + '%'} postion={isMobile ? '12rem' : imgPostions[0].toString() + 'rem'} >
						<img src={AmmarCreator}/>
					</ImageColumn>
					<ImageColumn width={imgWidths[1].toString() + '%'} postion={isMobile ? '-12.5rem' : imgPostions[1].toString() + 'rem'}>
						<img src={AmmarCoder}/>
					</ImageColumn> */}

					{/* <br></br>
					{hasMovedCursor
						? `Your cursor is at ${x}, ${y}.`
						: 'Move your mouse around.'}
							<br></br> */}
				</GraphicContainer>
				<Column opacity={opacity[0]}>
					<Pane display="flex" flexDirection="column" marginRight="2rem" marginBottom="2rem">
						<AboutBlock weight="bold">creator</AboutBlock>
						{!isMobile && <Description weight="thin">Artistic designer with a drive to create simple yet stunning user expirences.</Description> }
					</Pane>
				</Column>
				<Column opacity={opacity[1]}>
					<Pane display="flex" flexDirection="column"  marginBottom="2rem" alignItems={isTablet && 'flex-end'} textAlign={isTablet && 'right'}>
						<AboutBlock weight="bold"><p>&#60;</p>coder<p>&#62;</p></AboutBlock>
						{!isMobile &&<Description weight="thin">Full Stack Web Developr who focuses on writing elegant and effienct code. </Description> }
					</Pane>
				</Column>
			</MiddleConsole>
		</AboutMeContainer>
	)
}

export default Home
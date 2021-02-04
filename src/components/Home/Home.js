import React, { useContext, useRef, useEffect, useState} from 'react'
import useMouse from '@react-hook/mouse-position'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import AmmarCoder from '../../assets/img/home/coder_ammar2.png'
import AmmarCreator from '../../assets/img/home/creator_ammar2.png'



const aboutMeImgs = ['grays', 'art', 'board', 'desk', 'coffee', 'king']



const AboutMeContainer = styled.div`
  box-shadow: 0 2px 3px #dddddd;
  max-height: 40rem;
  height:40rem;
  /* border-bottom: 1px solid #dddddd; */

`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:90rem;
	max-width: 90rem;
	display:flex;
	justify-content:center;
	position: relative;
	/* align-items: flex-end; */
	height:100%;
`

const Column = styled.div`
	display:flex;
	flex:1;
	justify-content:center;
	align-items:center;
	transition: opacity 0.5s ease-in-out;
	:nth-of-type(2){
		opacity:${props => props.opacity};
	}
	:last-of-type{
		opacity:${props => props.opacity};
	}

`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 65px !important;
  color: ${({theme}) => theme.grey_6};;
  color: #000000;
 
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
`

const GraphicContainer = styled.div`
		display: flex;
		flex-direction:row;
		justify-content: center;
		height:100%;
    position: absolute;
    top: 0;
		justify-content:center;

`

const ImageColumn = styled.div`
	display:flex;
	justify-content:center;

	:first-of-type {

		width:50%;
		/* width:${props => props.width}; */
		img {
			transition: object-position 0.8s ease-out;

			height: 40rem;
			object-fit:cover;
			object-position: ${props => props.postion};
			/* object-position:-410% 0; */
			/* object-position:20rem 0; */

		}
	}
	:last-of-type {
		width:50%;

		/* width : ${props => props.width}; */
		img {
			transition: object-position 0.8s ease-out;

			height: 40rem;
			object-fit:cover;
			object-position: ${props => props.postion};
			/* object-position: -25rem 0; */
			/* object-position: 540% 0; */

		}
	}
`

const Home = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [imgWidths, setImgWidths] = useState([50, 50])
	const [imgPostions, setImgPostions] = useState([19.5, -25])
	const [opacity, setOpacity] = useState([1,1])
	const [positionSide, setPostionSide] = useState()
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
		const postionAspectL = 13 / (shiftRange)
		const postionAspectR = -13 / (shiftRange)

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
			console.log(opacity)
		}
		else {
			setImgWidths([50, 50])
			setImgPostions([20, -25])
			setOpacity([1,1])
		}
	}, [mouse.x, mouse.y])

	return (
		<AboutMeContainer ref={ref}>
			<MiddleConsole >
				<GraphicContainer>
					<ImageColumn width={imgWidths[0].toString() + '%'} postion={imgPostions[0].toString() + 'rem'} >
						<img src={AmmarCreator}/>
					</ImageColumn>
					<ImageColumn width={imgWidths[1].toString() + '%'} postion={imgPostions[1].toString() + 'rem'}>
						<img src={AmmarCoder}/>
					</ImageColumn>
				</GraphicContainer>
				<Column opacity={opacity[0]}>
					<Pane display="flex" flexDirection="column" marginRight="2rem" marginBottom="2rem">
						<AboutBlock weight="bold">creator</AboutBlock>
						<Description weight="thin">Artistic designer with a drive to create simple yet stunning user expirences.</Description>
					</Pane>
				</Column>
				<Column opacity={opacity[1]}>
					<Pane display="flex" flexDirection="column" marginRight="-4rem"  marginBottom="2rem">
						<AboutBlock weight="bold"><p>&#60;</p>coder<p>&#62;</p></AboutBlock>
						<Description weight="thin">Full Stack Web Developr who focuses on writing elegant and effienct code. </Description>
					</Pane>
				</Column>
			</MiddleConsole>
		</AboutMeContainer>
	)
}

export default Home
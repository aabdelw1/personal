import React, { useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import AmmarCoder from '../../assets/img/home/coder_ammar2.png'
import AmmarCreator from '../../assets/img/home/creator_ammar2.png'
import { useInView } from 'react-intersection-observer'


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
	height:100%;
	@media (max-width: 1140px) { 
		width:unset;
 	}
`

const GraphicContainer = styled.div`
		display: flex;
    top: 0;
		max-height: 40rem;
		height:100%;
		align-items: flex-end;



	`

const ImageColumn = styled.div`
		height:100%;
		display: flex;
	:first-of-type,
	:last-of-type {
		img {
			transition: object-position, opacity;
			transition-duration: 1s;
			/* transition-delay: 1; */
			transition-timing-function: ease-in-out; 
			object-fit: cover;
			opacity: ${props => props.opac};
			object-position: ${props => props.position};
			@media (max-width: 1140px) { 
				object-position: ${props => props.media};
 			}
		} 
	}
`


const Graphic = () => {
	const [imgWidths, setImgWidths] = useState([50, 50])
	const [imgPostions, setImgPostions] = useState(450)
	const [img2Postions, setImg2Postions] = useState(-450)
	
	const [ref, inView] = useInView()

	useEffect(() => {
		if(inView){
			setImgPostions('-67') 
			setImg2Postions('171')
		}
	}, [inView])
	// const ref = useRef(null)

	return (
		<AboutMeContainer ref={ref}>
			<MiddleConsole>
				<GraphicContainer>
					<ImageColumn position={imgPostions.toString() + '%'} media={'-75%'}>
						<img src={AmmarCreator}/>
					</ImageColumn>
					<ImageColumn  position={img2Postions.toString() + '%'} media={'180%'}>
						<img src={AmmarCoder}/>
					</ImageColumn>
				</GraphicContainer>
			</MiddleConsole>
		</AboutMeContainer>
	)
}

export default Graphic
import React, { useRef, useState} from 'react'
import styled from 'styled-components'
import AmmarCoder from '../../assets/img/home/coder_ammar2.png'
import AmmarCreator from '../../assets/img/home/creator_ammar2.png'


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
	/* position: relative; */
	height:100%;
	transition: align-items 0.8s ease-out;
	@media (max-width: 1140px) { 
		width:unset;
 	}
`

const GraphicContainer = styled.div`
		display: flex;
    /* position: absolute; */
    top: 0;
		max-height: 40rem;
		height:100%;
		align-items: flex-end;
		@media (max-width: 1140px) { 
		/* height: 56; */
 	}
	`

const ImageColumn = styled.div`
	height:100%;
	:first-of-type{
		width:50%;
		display: flex;
		img {
			transition: object-position height 0.8s ease-out;
			object-fit:cover;
			/* height: 100%; */
			object-position: -67%;
			@media (max-width: 1140px) { 
				object-position: -75%;
 			}

		} 
	}
	:last-of-type {
		width:50%;
		display: flex;
		img {
			transition: object-position height 0.8s ease-out;
			object-fit:cover;
			/* height: 40rem; */
			object-position: 171%;
			@media (max-width: 1140px) { 
				object-position:180%;
 			}
		} 
	}
`


const Graphic = () => {
	const [imgWidths, setImgWidths] = useState([50, 50])
	const [imgPostions, setImgPostions] = useState([10, -25])
	const ref = useRef(null)

	return (
		<AboutMeContainer ref={ref} onMouseEnter>
			<MiddleConsole>
				<GraphicContainer>
					<ImageColumn width={imgWidths[0].toString() + '%'} postion={imgPostions[0].toString() + 'rem'} >
						<img src={AmmarCreator}/>
					</ImageColumn>
					<ImageColumn width={imgWidths[1].toString() + '%'} postion={imgPostions[1].toString() + 'rem'}>
						<img src={AmmarCoder}/>
					</ImageColumn>
				</GraphicContainer>
			</MiddleConsole>
		</AboutMeContainer>
	)
}

export default Graphic
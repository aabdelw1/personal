import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Typography } from '../primitives'
import AmmarAbout from '../../assets/img/ammar_about.png'
import { useInView } from 'react-intersection-observer'

const aboutMeImgs = ['grays', 'art', 'board', 'desk', 'coffee', 'king']


const AboutMeContainer = styled.div`
  box-shadow: 0 2px 3px #dddddd;
  max-height: 44.9rem;
  height:44.9rem;
	-webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
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
	transition: margin-top 1s 3s ease-in-out;
	@media (max-width: 992px) { 
			width:unset;
			flex-direction: column;
			justify-content: center;
 		}
  :first-of-type {
    height: 75%;
    border-bottom: 1px solid #dddddd;
		@media (max-width: 992px) { 
			align-items: center;
			margin-right:2rem;
			margin-left:2rem;
 		}
  }
  :last-of-type {
    height: 25%;
  }
`
const Pictures = styled.div`
	display: flex;
	margin-top: ${props => props.pos};
	opacity: ${props => props.opac};
	transition: margin-top, opacity;
	transition-duration: 0.2s;
	transition-delay: ${props => props.time};
	transition-timing-function: ease-in-out; 

`
const Column = styled.div`
	transition: margin-left, opacity, left;
	transition-duration: 0.7s;
	transition-delay: 0s;
	transition-timing-function: ease-out; 
  display:flex;
  :first-of-type {
		margin-left:${props => props.pos};
		opacity: ${props => props.opac};
    width: 40%;
    justify-content: flex-end;
    align-items: center;
			@media (max-width: 992px) { 
			width:unset;
 	}
		
  }
  :last-of-type {
		margin-left: ${props => props.pos};
    width: 60%;
		opacity: ${props => props.opac};
		left: ${props => props.pos};
		position: relative;
    max-width:90vh;
    justify-content: flex-end;
    align-items: flex-end;
		@media (max-width: 992px) { 
			justify-content: center;
 		}
		img {
			max-width:40rem;
			@media (max-width: 992px) { 
					width:50vh;
					margin-top:1rem;
				}
		}
  }
`

const Pic = styled.div`
	display: flex;
	height:100%;
	img{
		object-fit:cover;
	}
`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 70px !important;
  color: ${({theme}) => theme.grey_6};;
  color: #000000;
	@media (max-width: 992px) { 
		margin-top:3rem;
	}
 
  p:first-of-type {
    display: inline;
    font-size: 1rem !important;
  }
`
const SubText = styled(Typography)`
  font-size: 24px;
  margin: 20px 0 29px;
`

const Description = styled(Typography)`
  font-size: 18px;
  line-height:30px;
  color:#000;
`

const Pane2 = styled.div`
	display: flex;
	flex-direction: column;
`

const Pane = styled.div`
	margin-top:2rem; 
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
`

const PictureContainer = styled.div`
	display:flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	float: left;
	border: 1px solid #dddddd;
	border-radius: 0.2rem;
	width: 160px;
	height: 120px;
	padding:.3rem;
	margin-right: ${props => props.marginR};
	margin-left: ${props => props.marginL};
	margin-bottom: ${props => props.marginB};
	-webkit-box-shadow: 1px 1px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    1px 1px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         0px 1px 2px #ccc;
	transition: all .2s ease-in-out;
	:hover{
		transform: scale(1.1);
	}
`

const AboutMe = () => {
	const [aboutPos, setAboutPos] = useState('30rem')
	const [picturePos, setPicturePos] = useState('4rem')
	const [opac, setOpac] = useState('0')
	const [ref, inView] = useInView()
	const isMobile = useMediaQuery({ maxWidth: 992 })


	useEffect(() => {
		if(inView){
			setPicturePos('0rem') 
			setAboutPos('0rem')
			setOpac('1')
		}
	}, [inView])

  
	return (
		<AboutMeContainer ref={ref}>
			<MiddleConsole>
				<Column pos={'-' + aboutPos} opac={opac}>
					<Pane2>
						<AboutBlock weight="bold">About Me </AboutBlock>
						<SubText>I&#39;m a software engineer based in cowboy country Dallas, Texas.</SubText>
						<Description weight="thin">I take pride in finding the best intuitive designs and making it better. When I&apos;m not coding, graming, or swearing at my computer, you&apos;ll find me cooking, yoga-ing, or shopping at Costco.</Description>
					</Pane2>
				</Column>
				<Column pos={aboutPos} opac={opac}>
					<img src={AmmarAbout}/>
				</Column>
			</MiddleConsole>
			<MiddleConsole>
				<Pane margin={isMobile ? '3rem' : '3rem'}>
					{
						aboutMeImgs.map((name, index) => {
							const time = ((index + 1.8) * 0.25).toString() + 's'
							return (
								<Pictures key={index} pos={picturePos} opac={opac} time={time}>
									<PictureContainer
										marginR={index == 5 && !isMobile ? '0rem' : '0.5rem'} 
										marginL={index == 0  && !isMobile ? '0rem' : '0.5rem'}
										marginB={index == 5  && isMobile ? '3rem' : '1rem'}
									>
										<Pic>
											<img src={require(`../../assets/img/about_slide/${name}.png`)}/>
										</Pic>
									</PictureContainer>
								</Pictures>
							)
						})
					}
				</Pane>
			</MiddleConsole>
		</AboutMeContainer>
	)
}

export default AboutMe
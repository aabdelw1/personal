import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Pane } from 'evergreen-ui'
import { Typography } from '../primitives'
// import { ThemeProvider } from '../../Layout'
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

`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
  display:flex;
	transition: margin-top 1s 3s ease-in-out;

  :first-of-type {
    height: 75%;
    border-bottom: 1px solid #dddddd;
  }
  :last-of-type {
    height: 25%;
    justify-content: center;
    
  }
`
const Pictures = styled.div`
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
		img {
			max-width:40rem;
		}
  }
`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 70px !important;
  color: ${({theme}) => theme.grey_6};;
  color: #000000;
 
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

const AboutMe = () => {
	// const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [aboutPos, setAboutPos] = useState('30rem')
	const [picturePos, setPicturePos] = useState('4rem')
	const [opac, setOpac] = useState('0')
	const [ref, inView] = useInView()

	// const [theme] = themeCtx

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
					<Pane display="flex" flexDirection="column">
						<AboutBlock weight="bold">About Me </AboutBlock>
						<SubText>I&#39;m a software engineer based in cowboy country Dallas, Texas.</SubText>
						<Description weight="thin">I take pride in finding the best intuitive designs and making it better. When I&quot;m not coding, graming, or swearing at my computer, you&apos;ll find me cooking, yoga-ing, or shopping at Costco.</Description>
					</Pane>
				</Column>
				<Column pos={aboutPos} opac={opac}>
					<img src={AmmarAbout}/>
				</Column>
			</MiddleConsole>
			<MiddleConsole>
				<Pane display="flex" marginTop="2rem" justifyContent="center">
					{
						aboutMeImgs.map((name, index) => {
							const time = ((index + 1.8) * 0.25).toString() + 's'
							return (
								<Pictures key={index} pos={picturePos} opac={opac} time={time}>
									<Pane
										elevation={1}
										float="left"
										hoverElevation={2}
										borderRadius=".2rem"
										width={150}
										height={85}
										border="default"
										marginLeft={index == 0 ? 0 : 28}
										display="flex"
										justifyContent="center"
										alignItems="center"
										flexDirection="column"
										padding = {5}
									>
										<img src={require(`../../assets/img/about_slide/${name}.png`)}/>
									</Pane>
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
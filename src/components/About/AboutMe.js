import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../primitives'
import { ThemeProvider } from '../../Layout'
import AmmarAbout from '../../assets/img/ammar_about.png'


const aboutMeImgs = ['grays', 'art', 'board', 'desk', 'coffee', 'king']



const AboutMeContainer = styled.div`
  box-shadow: 0 2px 3px #dddddd;
  max-height: 44.9rem;
  height:44.9rem;
	/* background-color: ${props => props.theme.blue}; */
  /* border-bottom: 1px solid #dddddd; */

`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
  max-width: 80rem;
  display:flex;
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
		@keyframes slideInFromBottom {
			0% {
				transform: translateY(80%);
				opacity: 0;
			}
			100% {
				transform: translateY(0);
				opacity: 1;
			}
		}
		:nth-child(1){animation: slideInFromBottom 0.2s 0.1s ease-in-out;}
    :nth-child(2){animation: slideInFromBottom 0.2s 0.3s ease-in-out; } 
    :nth-child(3){animation: slideInFromBottom 0.2s 0.6s ease-in-out;}
    :nth-child(4){animation: slideInFromBottom 0.2s 0.9s ease-in-out;}
    :nth-child(5){animation: slideInFromBottom 0.2s 1.2s ease-in-out; }
		:nth-child(6){animation: slideInFromBottom 0.2s 1.5s ease-in-out; }
`
const Column = styled.div`
  display:flex;
  :first-of-type {
    width: 40%;
    justify-content: flex-end;
    align-items: center;
  }
  :last-of-type {
    width: 60%;
    max-width:90vh;
    justify-content: flex-end;
    align-items: flex-end;
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
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx

  
  
	return (
		<AboutMeContainer>
			<MiddleConsole>
				<Column>
       		<Pane display="flex" flexDirection="column">
						<AboutBlock weight="bold">About Me </AboutBlock>
						<SubText>I&quot;m a software engineer based in cowboy country Dallas, Texas.</SubText>
						<Description weight="thin">I take pride in finding the best intuitive designs and making it better. When I&quot;m not coding, graming, or swearing at my computer, you&apos;ll find me cooking, yoga-ing, or shopping at Costco.</Description>
					</Pane>
				</Column>
				<Column>
					<img src={AmmarAbout}/>
				</Column>
			</MiddleConsole>
			<MiddleConsole>
				<Pane display="flex" marginTop="2rem" justifyContent="center">
					{
						aboutMeImgs.map((name, index) => {
							return (
								<Pictures key={index}>
									<Pane
										elevation={2}
										float="left"
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
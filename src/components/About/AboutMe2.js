import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import AmmarAbout from '../../assets/img/ammar_about.png'
import art from '../../assets/img/about_slide/art.png'


const aboutMeImgs = ['grays', 'art', 'board', 'desk', 'coffee', 'king']


const AboutMeContainer = styled.div`
  box-shadow: 0 2px 3px #dddddd;
  max-height: 45rem;
  height:44.9rem;

`
const RowContainer = styled.div`
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

const AboutMe2 = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx
  
  
	return (
		<AboutMeContainer>
			<RowContainer>
				<Column>
       		<Pane display="flex" flexDirection="column" marginRight="4rem">
						<AboutBlock weight="bold">About Me </AboutBlock>
						<SubText>I&quot;m a software engineer based in cowboy country Dallas, Texas</SubText>
						<Description weight="thin">In the beginning, the world was shrouded in fog and nothing ever really happened, it was ruled by the everlasting dragons neither alive nor dead they just
were. This was the age of ancients. </Description>
					</Pane>
				</Column>
				<Column>
					<img src={AmmarAbout}/>
				</Column>
			</RowContainer>
			<RowContainer>
				<Pane display="flex" marginTop="2rem" justifyContent="center">
					{
						aboutMeImgs.map((name, index) => {
							return (
								<Pane
									key={index}
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
								>
									<Pane padding={5}>
										<img src={require(`../../assets/img/about_slide/${name}.png`)}/>
									</Pane>
								</Pane>
							)
						})
					}
				</Pane>
			</RowContainer>
		</AboutMeContainer>
	)
}

export default AboutMe2
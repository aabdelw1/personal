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
  /* border-bottom: 1px solid #dddddd; */

`
const MiddleConsole = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:90rem;
	max-width: 100rem;
	display:flex;
	justify-content:center;
	height:100%;
`

const Column = styled.div`
	display:flex;
	flex:1;
  background-color: #fafafa;
  /* margin-left:1rem; */
  
	justify-content:center;
	align-items:center;
  margin-bottom:rem;


`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 78px !important;
  color: ${({theme}) => theme.grey_6};;
  color: #000000;
 
  p {
    display: inline;
    font-weight: 400;
  }

`
const SubText = styled(Typography)`
  font-size: 24px;
  margin: 20px 0 29px;
`

const Description = styled(Typography)`
  font-size: 22px;
  line-height:30px;
  color:#000;
  width:18rem;
`
const Home = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx

  
  
	return (
		<AboutMeContainer>
			<MiddleConsole>
				<Column>
					<Pane display="flex" flexDirection="column" marginRight="7rem" marginBottom="3rem">
						<AboutBlock weight="bold">creator</AboutBlock>
						<Description weight="thin">Artistic designer with a drive to create simple yet stunning user expirences.</Description>
					</Pane>
				</Column>
				<Column>
					<Pane display="flex" flexDirection="column" marginRight="-7rem"  marginBottom="3rem">
						<AboutBlock weight="bold"><p>&#60;</p>coder<p>&#62;</p></AboutBlock>
						<Description weight="thin">Full Stack Web Developr who focuses on writing, elegant, yet effienct code. </Description>
					</Pane>

				</Column>
			</MiddleConsole>
		</AboutMeContainer>
	)
}

export default Home
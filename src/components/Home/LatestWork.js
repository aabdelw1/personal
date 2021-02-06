import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import Card from '../Portfolio/Card'


const Container = styled.div`
  max-height: 30rem;
  height:30rem;
	box-shadow: 0 2px 3px #dddddd;
  background-color: #fafafa;
  border-top: 2px solid #dddddd;
`

const MiddleConsole = styled(Typography)`
  margin-left: auto;
  margin-right: auto;
  width:65rem;
	max-width: 80rem;
	display:flex;
	justify-content:center;
	height:100%;
  :first-of-type {
    height: 18%;
  }
  :last-of-type {
    height: 82%;
    justify-content: center;
    
  }
`

const Column = styled.div`
  width:100%;
  :first-of-type{
    border-bottom:1px solid #dddddd;
  }
  :nth-of-type(2){
    display:flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom:-0.5rem;
    width: 70%;
  }
  :last-of-type{
    border-bottom:1px solid #dddddd;
  }
`


const LatestWork = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx

	const cardInfo = [
		{
			name: 'Kalman Filter',
			category: 'AI for Robotics',
			image: 'rocket'
		},{
			name: 'Ingies Animal Shelter',
			category: 'Full Stack Web App',
			image: 'dog'
		},{
			name: 'Indicator Evaluation',
			category: 'Machine Learning',
			image: 'stocks'
		}
	]


	return (
		<Container>
			<MiddleConsole weight="normal">
				<Column/>
				<Column>SOME OF MY LATEST WORK</Column>
				<Column/>
			</MiddleConsole>
			<MiddleConsole>
				<Pane marginTop="2rem" display="flex">
					{
						cardInfo.map((project, index) => {
					 return(	<Card project={project} key={index} />)
						})
					}
				</Pane>
			</MiddleConsole>
		</Container> 
	)
}

export default LatestWork
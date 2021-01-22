import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import Ghidorah from '../../assets/img/ghidorah.png'


const Container = styled.div`
  display: flex;
  max-height: 65vh;
  height:65vh;
  box-shadow: 0 2px 3px #dddddd;
`

const Column = styled.div`
  display:flex;
  :first-of-type {
    width: 60%;
    justify-content: flex-end;
    align-items: flex-end;
  }
  :last-of-type {
    width: 40%;
    align-items: center;
    margin-left: 4rem;
  }

`

const ImgBox = styled.div`
  max-width:80vh;

`

const Header = styled(Typography)`
  color: #000;
  font-size: 30px;
  margin: 25px 0;
`

const Description = styled(Typography)`
  color: #000;
  font-weight: 200;
	font-size: 20px;
  margin-bottom:0.9rem;
`


const RandomFacts = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx
  
	return (
		<Container>
			<Column>
				<ImgBox>
					<img src={Ghidorah}/>
				</ImgBox>
			</Column>
			<Column>
				<Pane display="flex" flexDirection="column">
					<Header weight="normal">Random Facts</Header>
					<Description>I play alot of piano</Description>
					<Description>I like to draw</Description>
					<Description>I make the best cookies </Description>
					<Description>I&quot;m a neat freak</Description>
					<Description>I love sci fi movies</Description>
					<Description>I&quot;m addicted to Chick-fil-A</Description>
				</Pane>
			</Column> 
		</Container> 
	)
}

export default RandomFacts
import React, { useContext } from 'react'
import styled from 'styled-components'
import { toaster, Heading, Pane, Text } from 'evergreen-ui'
import { Typography } from '../../components/primitives'
import { ThemeProvider } from '../../Layout'
import AmmarAbout from '../../assets/img/ammar_about.png'



const EditorContainer = styled.div`
  display: flex;
  flex: 1;
`

const PageWrapper = styled.div`
  /* height: 100%; */
	display: flex;
	/* flex-direction: column;  */
	justify-content: center;
	align-items: center;
`

const AboutBlock = styled(Typography)`
  display:block !important;
  font-size: 4rem !important;
  margin-top: 3rem;
  /* font-weight: bold; */
  color: ${({theme}) => theme.grey_6};;
  color: #000000;
 

  /* background-color: #D9822B; */

  /* Medium devices (tablets, 768px and up) */
	/* @media (min-width: 768px) { 
		width:50% !important;
 	} */

  p:first-of-type {
    display: inline;
    font-size: 1rem !important;
  }

`
const SubText = styled(Typography)`
  font-size: 24px;
  margin: 25px 0;
`

const Description = styled(Typography)`
	font-size: 18px;
	/* margin: 25px 0; */
  /* background-color: #FAE3CD; */

	
/* 
	a {
		font-size: 24px !important;
		color: inherit !important;
		text-decoration: none;
	} */
`

const ImgBox = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  max-width:70vh;

`

const AboutMe = () => {
	const { theme: themeCtx } = useContext(ThemeProvider.Context)
	const [theme] = themeCtx
  
	return (
		<EditorContainer>
			
		</EditorContainer>
		// <Pane maxHeight={'80vh'} minHeight={'80vh'} clearfix>
		// 	{/*     <Pane display="flex" alignItems="center" justifyContent="center" borderBottom="default"> */}
		// 	<PageWrapper>
		// 		<Pane display="flex" flexDirection="column" marginRight="5rem" width="25rem" >
		// 			<AboutBlock weight="bold">about me </AboutBlock>
		// 			<SubText>I'm a software engineer based in cowboy country Dallas, Texas</SubText>
		// 			<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </Description>
		// 		</Pane>
		// 		<ImgBox>
		// 			<img src={AmmarAbout}/>
		// 		</ImgBox>			
		// 	</PageWrapper>

	// 	{/* /Pane> */}
	// 	<Pane display="flex" alignItems="center" justifyContent="center" marginTop="3rem">
	// 		<Pane
	// 			elevation={1}
	// 			float="left"
	// 			borderRadius=".2rem"
	// 			width={150}
	// 			height={75}
	// 			margin={24}
	// 			display="flex"
	// 			justifyContent="center"
	// 			alignItems="center"
	// 			flexDirection="column"
	// 		>
	// 			<Text>Photo 1</Text>
	// 		</Pane>
	// 		<Pane
	// 			elevation={1}
	// 			float="left"
	// 			width={150}
	// 			height={75}
	// 			margin={24}
	// 			display="flex"
	// 			justifyContent="center"
	// 			alignItems="center"
	// 			flexDirection="column"
	// 		>
	// 			<Text>Photo 1</Text>
	// 		</Pane>
	// 		<Pane
	// 			elevation={1}
	// 			float="left"
	// 			width={150}
	// 			height={75}
	// 			margin={24}
	// 			display="flex"
	// 			justifyContent="center"
	// 			alignItems="center"
	// 			flexDirection="column"
	// 		>
	// 			<Text>Photo 3</Text>
	// 		</Pane>
	// 		<Pane
	// 			elevation={1}
	// 			float="left"
	// 			width={150}
	// 			height={75}
	// 			margin={24}
	// 			display="flex"
	// 			justifyContent="center"
	// 			alignItems="center"
	// 			flexDirection="column"
	// 		>
	// 			<Text>Photo 4</Text>
	// 		</Pane>
	// 		<Pane
	// 			elevation={1}
	// 			float="left"
	// 			width={150}
	// 			height={75}
	// 			margin={24}
	// 			display="flex"
	// 			justifyContent="center"
	// 			alignItems="center"
	// 			flexDirection="column"
	// 		>
	// 			<Text>Photo 5</Text>
	// 		</Pane>
	// 	</Pane>
	// </Pane> 
	)
}

export default AboutMe
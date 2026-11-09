import React from 'react'
import { Helmet } from 'react-helmet'
import CVPage from '../components/CV/CVPage'

const CV = () => (
	<>
		<Helmet>
			<title>Ammar Abdelwahed · CV</title>
			<meta name="description" content="Ammar Abdelwahed, frontend software engineer at Google in Mountain View, CA." />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:opsz,wght@6..72,500&display=swap" rel="stylesheet" />
		</Helmet>
		<CVPage/>
	</>
)

export default CV

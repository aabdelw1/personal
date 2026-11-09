import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { profile, experience, skills, education } from './cvData'

const ink = '#1c1b1a'
const muted = '#6b6862'
const paper = '#fbfaf8'
const serif = '\'Newsreader\', Georgia, \'Times New Roman\', serif'
const sans = '\'Inter\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'

const PageStyle = createGlobalStyle`
	body {
		background: ${paper};
	}
`

const Page = styled.div`
	background: ${paper};
	color: ${ink};
	font-family: ${sans};
	font-size: 15px;
	line-height: 1.6;
	min-height: 100vh;
	padding: 4.5rem 1.5rem 5rem;

	@media (max-width: 600px) {
		padding: 2.5rem 1rem 3rem;
	}

	a,
	a:hover {
		color: inherit;
	}

	@media print {
		padding: 0;
		font-size: 12px;
	}
`

const Grid = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: minmax(0, 1fr) 300px;
	column-gap: 4.5rem;

	@media (max-width: 860px) {
		grid-template-columns: minmax(0, 1fr);
	}
`

const Main = styled.main``

const Aside = styled.aside`
	@media (max-width: 860px) {
		border-top: 1px solid #e4e1dc;
		margin-top: 1rem;
		padding-top: 1rem;
	}
`

const Name = styled.h1`
	font-family: ${serif};
	font-weight: 500;
	font-size: 2.6rem;
	line-height: 1.1;
	letter-spacing: -0.01em;
	margin: 0;
`

const Title = styled.p`
	margin: 0.6rem 0 0;
`

const SectionTitle = styled.h2`
	font-family: ${serif};
	font-weight: 500;
	font-size: 1.5rem;
	margin: 3rem 0 1rem;
`

const AsideTitle = styled(SectionTitle)`
	@media (min-width: 861px) {
		&:first-of-type {
			margin-top: 2.25rem;
		}
	}
`

const ContactList = styled.ul`
	list-style: none;
	margin: 0.4rem 0 0;
	padding: 0;
	color: ${muted};

	li {
		margin: 0 0 0.15rem;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: ${ink};
		text-decoration: underline;
	}

	@media (max-width: 860px) {
		margin-top: 1.25rem;
	}
`

const Role = styled.article`
	margin: 0 0 2rem;
`

const RoleHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: baseline;
	justify-content: space-between;
	gap: 0.25rem 1rem;
`

const RoleTitle = styled.h3`
	font-family: ${serif};
	font-weight: 500;
	font-size: 1.2rem;
	margin: 0;

	span {
		font-family: ${sans};
		font-size: 1.05rem;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	sup {
		font-size: 0.7em;
		margin-left: 0.15em;
	}
`

const Dates = styled.div`
	color: ${muted};
	font-size: 0.78rem;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	white-space: nowrap;
`

const Location = styled.div`
	color: ${muted};
	font-size: 0.9rem;
	margin-top: 0.1rem;
`

const Bullets = styled.ul`
	margin: 0.6rem 0 0;
	padding-left: 1.2rem;
	list-style: disc;

	li {
		margin: 0 0 0.35rem;
	}
`

const Tech = styled.p`
	color: ${muted};
	font-size: 0.9rem;
	margin: 0.4rem 0 0;
`

const SubHeading = styled.h4`
	font-family: ${sans};
	font-weight: 600;
	font-size: 0.95rem;
	margin: 1.1rem 0 0.2rem;
`

const Plain = styled.p`
	margin: 0;
`

const Meta = styled.p`
	color: ${muted};
	margin: 0;
`

const Footer = styled.div`
	max-width: 1080px;
	margin: 3rem auto 0;
	font-size: 0.9rem;
	color: ${muted};

	a {
		text-decoration: none;
	}

	a:hover {
		color: ${ink};
		text-decoration: underline;
	}

	@media print {
		display: none;
	}
`

const CVPage = () => (
	<Page>
		<PageStyle/>
		<Grid>
			<Main>
				<header>
					<Name>{profile.name}</Name>
					<Title>{profile.title}</Title>
				</header>

				<section>
					<SectionTitle>About</SectionTitle>
					<Plain>{profile.about}</Plain>
				</section>

				<section>
					<SectionTitle>Experience</SectionTitle>
					{experience.map(({ role, company, url, location, dates, bullets, tech }) => (
						<Role key={`${company}-${dates}`}>
							<RoleHeader>
								<RoleTitle>
									{role} · <span><a href={url} target="_blank" rel="noopener noreferrer">{company}<sup>↗</sup></a></span>
								</RoleTitle>
								<Dates>{dates}</Dates>
							</RoleHeader>
							<Location>{location}</Location>
							<Bullets>
								{bullets.map((b) => <li key={b}>{b}</li>)}
							</Bullets>
							{tech && <Tech>{tech}</Tech>}
						</Role>
					))}
				</section>
			</Main>

			<Aside>
				<ContactList>
					{profile.contact.map(({ label, href }) => (
						<li key={href}>
							<a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">{label}</a>
						</li>
					))}
				</ContactList>

				<section>
					<AsideTitle>Skills</AsideTitle>
					{skills.map(({ heading, items }) => (
						<div key={heading}>
							<SubHeading>{heading}</SubHeading>
							<Plain>{items}</Plain>
						</div>
					))}
				</section>

				<section>
					<SectionTitle>Education</SectionTitle>
					{education.map(({ school, place, dates, degree }) => (
						<div key={school}>
							<SubHeading>{school}</SubHeading>
							<Meta>{place} · {dates}</Meta>
							<Plain>{degree}</Plain>
						</div>
					))}
				</section>
			</Aside>
		</Grid>
		<Footer>
			<a href="/">← Back to ammarnasr.dev</a>
		</Footer>
	</Page>
)

export default CVPage

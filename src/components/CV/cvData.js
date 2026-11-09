export const profile = {
	name: 'Ammar Abdelwahed',
	title: 'Frontend software engineer, product UI and AI-driven tools',
	about:
		'I\'m a software engineer who cares about building clean, intuitive products end to end. I\'m currently a Frontend Software Engineer at Google in Mountain View, working on advertiser tools and conversational AI for sales teams. Before that, I built product features at ClassPass, Walmart Labs, Twitter, and AT&T.',
	contact: [
		{ label: 'ammar.s.nasr@gmail.com', href: 'mailto:ammar.s.nasr@gmail.com' },
		{ label: 'ammarnasr.dev', href: 'https://www.ammarnasr.dev' },
		{ label: 'github.com/aabdelw1', href: 'https://github.com/aabdelw1' },
		{ label: 'linkedin.com/in/ammar-abdelwahed', href: 'https://www.linkedin.com/in/ammar-abdelwahed/' },
	],
}

export const experience = [
	{
		role: 'Frontend Software Engineer',
		company: 'Google',
		url: 'https://about.google',
		location: 'Mountain View, CA',
		dates: 'Apr 2025 – Present',
		bullets: [
			'Engineered the Value-Based Bidding (VBB) recommendations workflow in the Goals Hub using the BLoC pattern, enabling advertisers to seamlessly adopt [Target ROAS](https://support.google.com/google-ads/answer/6268637) and Max Value Bidding strategies',
			'Part of the new Conversational AI Sales team, focused on scaling AI-driven intelligence for GCS and LCS sales forces. Built an integrated Marketing Advisor chat histories page into the main details console and co-designed a robust segment-matching transcript highlighter',
		],
	},
	{
		role: 'Full-Stack Software Engineer',
		company: 'ClassPass',
		url: 'https://classpass.com',
		location: 'Nashville, TN',
		dates: 'Jun 2023 – Feb 2025',
		bullets: [
			'Integral to ClassPass\'s Corporate Squad, enhancing the [corporate wellness platform](https://classpass.com/corporate-wellness) that companies use to manage employee wellness benefits. Improved both frontend and backend processes, including designing new APIs and updating existing ones',
			'Led the Corporate Invoicing Project, creating a dashboard that recovered $7 million in revenue by clarifying invoice statuses for corporate clients',
		],
		tech: 'React, TypeScript, Kotlin, gRPC, AWS S3',
	},
	{
		role: 'Frontend Software Engineer',
		company: 'Walmart Labs',
		url: 'https://tech.walmart.com',
		location: 'Nashville, TN',
		dates: 'Jan 2023 – Jun 2023',
		bullets: [
			'Developed features for the [Walmart+](https://www.walmart.com/plus) platform, such as the benefits splash modal and the sign-up flow testing suite',
			'Built an advertiser page featuring a keywords search dashboard, using React within a micro-frontend architecture to improve modularity and scalability',
		],
		tech: 'React, TypeScript, Java',
	},
	{
		role: 'Full-Stack Software Engineer',
		company: 'Twitter',
		url: 'https://x.com',
		location: 'Dallas, TX',
		dates: 'Jan 2022 – Jan 2023',
		bullets: [
			'Worked on the advertiser experience team, maintaining multiple apps and services used to create promoted tweets and ad campaigns and measure their performance. Owned projects from planning and requirement gathering through development, success measurement, and support, along with cross-functional support and on-call',
			'Led the initiative that let advertisers select multiple existing tweets for their ad campaigns, improving on the original one-at-a-time flow. Drafted the design doc and built an extensive testing suite before shipping to production',
		],
		tech: 'React, Context API, Scala, GraphQL',
	},
	{
		role: 'Software Engineer',
		company: 'AT&T',
		url: 'https://www.att.com',
		location: 'Dallas, TX',
		dates: 'Jul 2017 – Dec 2021',
		bullets: [
			'Designed and developed a full-stack interviewing tool that automated 90% of the new-hire interviewing process, integrating the Outlook, room reservation, and Microsoft Teams APIs',
			'Designed and implemented a data ingestion system handling 1.5 billion records a day using Java\'s streaming pipeline capabilities, plus a Python tool for correlation and schema validation that automated all future data source exploration and feature validation',
		],
		tech: 'React, Node, MongoDB, Express, GraphQL, REST, Java, Hadoop, Spark, Flink, Python',
	},
]

export const skills = [
	{
		heading: 'Frontend',
		items: 'React, Redux, Context API, TypeScript, JavaScript, Next.js, Angular.js, HTML, CSS',
	},
	{
		heading: 'Backend',
		items: 'Kotlin, Java, Node.js, Python, Scala, GraphQL, MongoDB, PostgreSQL, AWS (S3, Lambda)',
	},
	{
		heading: 'Tooling',
		items: 'Git, Docker, JSON:API, gRPC',
	},
]

export const education = [
	{
		school: 'Georgia Institute of Technology',
		place: 'Atlanta, GA',
		dates: '2019 – 2022',
		degree: 'Master of Science in Computer Science',
	},
	{
		school: 'University of Tennessee, Knoxville',
		place: 'Knoxville, TN',
		dates: '2013 – 2017',
		degree: 'Bachelor of Engineering in Electrical Engineering, Computer Science minor',
	},
]

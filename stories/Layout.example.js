import React from 'react'

export const DefaultExampleContent = () => (
	<div display="flex">
		<div display="flex">
			<h1 className="mb-5">DefaultExampleContent</h1>
		</div>
		<h1 className="mb-5">Welcome to My NextJS Template</h1>
	</div>
)

export const SampleHero = () => (
	<div className="sm:text-center lg:text-left bg-grey text-red p-10">
		<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to
			<br/>
			<span className="text-indigo-600">My NextJS Template
			</span>
		</h2>
		<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam.
		</p>
		<button className="mt-8 py-3 w-1/6">Get Started</button>
	</div>
)

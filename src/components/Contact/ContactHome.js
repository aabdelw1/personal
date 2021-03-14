import React from 'react'
import { Pane } from 'evergreen-ui'
import ContactMe from './ContactMe'
import EmailMe from './EmailMe'




const ContactHome = () => {
	return (
		<Pane>
			<ContactMe/>
			<EmailMe/>
		</Pane>
	)
}

export default ContactHome
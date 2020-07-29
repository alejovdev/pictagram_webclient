import React from 'react'

import { BoxContainer, BasicForm, Input } from '../../components'

export default function SignUp() {
	return (
		<div className="fullscreen flex-center">
			<BoxContainer elevation={3}>
				<BasicForm title="Sign Up" submitLabel="Continue">
					{(props) => (
						<>
							<Input label="Email" type="email" />
						</>
					)}
				</BasicForm>
			</BoxContainer>
		</div>
	)
}

import React from 'react'
import { BasicForm, Input } from '../../components'

export default function SignIn() {
	return (
		<BasicForm>
			{() => (
				<>
					<Input label="Email" type="email" />
				</>
			)}
		</BasicForm>
	)
}

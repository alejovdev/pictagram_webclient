import React from 'react'
import { Formik, Form } from 'formik'

import Button from './Button'

export default function BasicForm({
	children,
	submitLabel = 'Submit',
	submitClassName = 'btn-primary btn-block mt-5',
	title = null,
	className = '',
}) {
	return (
		<Formik>
			{(props) => (
				<Form className={`form-ui ${className}`}>
					{title !== null && <h1 class="form-title">{title}</h1>}
					{children(props)}
					<Button className={submitClassName}>{submitLabel}</Button>
				</Form>
			)}
		</Formik>
	)
}

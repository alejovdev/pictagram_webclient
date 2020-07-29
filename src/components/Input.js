import React from 'react'
import { Field } from 'formik'

export default function Input({
	label = '',
	type = 'text',
	id = '',
	small = null,
}) {
	return (
		<div class="input-group">
			<label>{label}</label>
			<Field type={type} id={id} />
			<b className="border" />
			{small !== null && (
				<small className="form-text text-muted">{small}</small>
			)}
		</div>
	)
}

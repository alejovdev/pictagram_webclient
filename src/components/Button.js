import React from 'react'

export default function Button({
	children,
	className = '',
	onClick = () => {},
}) {
	return (
		<button
			className={`btn ${className.length === 0 ? 'btn-primary' : className}`}
			onClick={onClick}
			style={{
				textTransform: 'uppercase',
			}}
		>
			{children}
		</button>
	)
}

import React from 'react'

export default function BoxContainer({
	children,
	className = '',
	style = {},
	elevation = 1,
	padding = 5,
}) {
	return (
		<div
			className={`neobox p-${padding} ${className}`}
			style={{
				...style,
			}}
		>
			{children}
		</div>
	)
}

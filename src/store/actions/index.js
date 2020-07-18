// USER

export const signIn = (payload) => ({
	type: 'SIGN_IN',
	payload,
})

export const updateUser = (payload) => ({
	type: 'UPDATE_USER',
	payload,
})

export const signOut = () => ({
	type: 'SIGN_OUT',
})

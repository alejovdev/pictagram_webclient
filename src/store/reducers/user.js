const initialState = null

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SIGN_IN':
			return { ...payload }
		case 'SIGN_OUT':
			return false
		case 'UPDATE_USER':
			return { ...state, ...payload }
		default:
			return state
	}
}

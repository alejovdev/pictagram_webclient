import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

import { signIn, signOut, updateUser } from './store/actions'
import { Loading, SignIn, SignUp, Dashboard } from './screens'
import { auth, firestore } from './config/firebase'

import './styles/index.scss'

function App({ user, signIn, signOut, updateUser }) {
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (!user) signOut()
			else signIn(user)
		})
	}, [])

	return (
		<div className="app container pt-3">
			{user === null && <Loading />}
			{user !== null && (
				<BrowserRouter>
					<Switch>
						<Route
							path="/signin"
							render={(props) => {
								if (user === false) return <SignIn {...props} />
								else return <Redirect to="/" />
							}}
						/>
						<Route
							path="/signup"
							render={(props) => {
								if (user === false) return <SignUp {...props} />
								else return <Redirect to="/" />
							}}
						/>
						<Route
							path="/app"
							render={(props) => {
								if (user !== false) return <Dashboard {...props} />
								else return <Redirect to="/" />
							}}
						/>
						<Route
							path="/"
							render={() => {
								if (user === false) return <Redirect to="/signup" />
								else return <Redirect to="/app" />
							}}
						/>
					</Switch>
				</BrowserRouter>
			)}
		</div>
	)
}

export default connect((state) => ({ user: state.user }), {
	signIn,
	signOut,
	updateUser,
})(App)

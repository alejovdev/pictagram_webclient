import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

import config from './firebase.config'

const fire = firebase.initializeApp(config)

export const firestore = fire.firestore()
export const auth = fire.auth()
export const storage = fire.storage().ref()
export default fire

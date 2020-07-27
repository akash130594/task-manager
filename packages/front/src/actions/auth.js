import { firebase, googleAuthProvider } from "../firebase/firebase";


export const login  = (uid) => ({
    type: 'LOGIN',
    uid
})

export const signOut = () => ({
  type: 'LOGOUT'
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const logout = () => {
    return() => {
        return firebase.auth().signOut()
    }
}
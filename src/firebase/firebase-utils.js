import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBl_6Fcqb3TsJF2c4_Ey_nnx9BZ_qaP-6E",
  authDomain: "e-com-a8552.firebaseapp.com",
  projectId: "e-com-a8552",
  storageBucket: "e-com-a8552.appspot.com",
  messagingSenderId: "12041200994",
  appId: "1:12041200994:web:7d21a9078e9504c7f4383b",
  measurementId: "G-QG2TXNM1CR"

};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })

const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log(e)
    }

  }
  return userRef
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      unsubcribe()
      resolve(userAuth)
    }, reject)
  })
}

const convertCollectionsSnapShotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  // return transformedCollection
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export {
  auth,
  firestore,
  signInWithGoogle,
  createUserProfile,
  convertCollectionsSnapShotToMap
}

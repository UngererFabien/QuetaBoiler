import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADP7r0TkUeKyY3n7Mo25C1aNnA3XJL6f8",
    authDomain: "queta-boiler.firebaseapp.com",
    databaseURL: "https://queta-boiler.firebaseio.com",
    projectId: "queta-boiler",
    storageBucket: "queta-boiler.appspot.com",
    messagingSenderId: "309786254481",
    appId: "1:309786254481:web:f63a7b8df1ee8c95c5f330"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
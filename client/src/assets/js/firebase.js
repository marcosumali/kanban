import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyC6nHIdgN2PH62tmS5oIRoB4a8FzOWAD8Q',
  authDomain: 'kanbanoichi.firebaseapp.com',
  databaseURL: 'https://kanbanoichi.firebaseio.com',
  projectId: 'kanbanoichi',
  storageBucket: 'kanbanoichi.appspot.com',
  messagingSenderId: '572393389629'
})

export const db = app.database()
export const namesRef = db.ref('names')

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDh38rxPkIGO-fcx3uQW-tDPQqZoi4iIqg',
  authDomain: 'revents-10ee4.firebaseapp.com',
  databaseURL: 'https://revents-10ee4.firebaseio.com',
  projectId: 'revents-10ee4',
  storageBucket: 'revents-10ee4.appspot.com',
  messagingSenderId: '510339642084',
  appId: '1:510339642084:web:2c408a4aefc1a61f13b2f1',
  measurementId: 'G-QR7KPGQ9LP'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

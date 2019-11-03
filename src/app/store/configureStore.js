import { createStore, applyMiddleware } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from '../config/firebase';

const rrfConfig = {
  userProfiles: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
  // updateProfileOnLogin: false
};

export const configureStore = preloadedState => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(
    ...storeEnhancers,
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};

//perubahan tidak diketahui
// export const configureStore = () => {
//   const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

//   const composedEnhancer = composeWithDevTools(
//     applyMiddleware(...middlewares),
//     reactReduxFirebase(firebase, rrfConfig),
//     reduxFirestore(firebase)
//   );

//   const store = createStore(rootReducer, composedEnhancer);

//   return store;
// };

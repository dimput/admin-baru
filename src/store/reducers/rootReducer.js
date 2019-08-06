import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import dataCus from "./dataReducer.js";
import dataReq from "./dataReducer2.js";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  dataMumut: dataCus,
  dataDimas : dataReq
});

export default rootReducer

// the key name will be the data property on the state object
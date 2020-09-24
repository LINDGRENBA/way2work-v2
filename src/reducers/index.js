//... other reducers
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
  //other reducers go here
  firestore: firestoreReducer,
  formVisibleOnPage: formVisibleReducer,
});

export default rootReducer;
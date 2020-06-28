import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import { devToolsEnhancer } from 'redux-devtools-extension';
import contactsReducer from './contactsReducer';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(contactsReducer, composeWithDevTools(enhancer));

// const store = configureStore({
//     reducer: contactsReducer,
//     middleware: [ReduxThunk, ...getDefaultMiddleware()]
// });


export default store;
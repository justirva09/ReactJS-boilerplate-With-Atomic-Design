import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducer';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);


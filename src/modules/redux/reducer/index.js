import {combineReducers} from 'libraries';

// Reducer
import profile from './profile/reducer';

const reducer = combineReducers({
  profile
});

// Action
export * from './profile/action';


// Selector
export * from './profile/selector';

export default reducer;

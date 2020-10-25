import actionType from './const';

const initState = null

const profile = (state = initState, action) => {
  switch(action.type) {
    case actionType.SET_PROFILE:
      return {
        ...state,
        ...action.value
      };
    case actionType.CLEAR_PROFILE:
      return initState;
    default:
      return state;
  }
}

export default profile;

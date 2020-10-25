import actionType from './const';

export const setProfile = value => ({
  type: actionType.SET_PROFILE,
  value
});

export const clearProfile = () => ({
  type: actionType.CLEAR_PROFILE
})
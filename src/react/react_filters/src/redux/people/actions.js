import * as types from '../people/types';

// this is an example action
export const doNothing = (payload) => ({
  type: types.DO_NOTHING,
  payload: payload,
});

// ...

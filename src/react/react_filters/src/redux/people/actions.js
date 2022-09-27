import * as types from '../people/types';

export const filterPeople = (payload) => ({
  type: types.FILTER_PEOPLE,
  payload,
});
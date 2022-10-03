import * as t from "./actionTypes";

export const saveReservations = days => ({
  type: t.SAVE_RESERVATIONS,
  days
});

export const clearReservations = () => ({
  type: t.CLEAR_RESERVATIONS,
});


export const saveUser = payload => ({
  type: t.SAVE_USER,
  payload
});

export const deleteUser = () => ({
  type: t.DELETE_USER,
});
import { v4 as uuid } from 'uuid';
import {ADD_USER, CLEAN, DELETE_USER} from "./actionTypes";

export const addUser = payload => ({
    type: ADD_USER,
    payload: {
        id: uuid(),
        ...payload,
    },
});

export const deleteUser = (payload) => ({
    type: DELETE_USER,
    payload,
});

export const clean = () => ({
    type: CLEAN,
});
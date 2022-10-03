import _reduce from "lodash/reduce";

import * as t from "./../actions/actionTypes";
import {USERS_ATR} from "../common/constants";
import { v4 as uuid } from 'uuid';


const PEOPLE = [
    {id: 1, firstName: 'Jeffrey', lastName: 'Perkins', roomNumber: 2},
    {id: 2, firstNam: 'Lorna', lastName: 'Williamson', roomNumber: 2},
];

const initialState = {
    users: PEOPLE,
};

// const defaultState = _reduce(
//     USERS_ATR,
//     (result, entry) => {
//         result[entry] = [];
//         return result;
//     },
//     {}
// );
export const saveUser = (payload) => {
    return {
        type: 'SAVE_USER',
        payload: {
            id: uuid(),
            ...payload,
        },
    };
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case t.SAVE_USER:
        //     return {
        //         ...state,
        //         ...action.users
        //     };

        case t.SAVE_USER:
            return {
                ...state,
                users: [...state.list]
            };
        case t.DELETE_USER:
            return state;
        default:
            return state;
    }
};

import { v4 as uuid } from 'uuid';

export const addUser = payload => ({
    type: "ADD_USER",
    payload: {
        id: uuid(),
        ...payload,
    },
});

export const deleteUser = (payload) => ({
    type: "DELETE_USER",
    payload,
});

export const clean = () => ({
    type: "CLEAN",
});


const initialState = {
    users: [],
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case "DELETE_USER":
            return {
                users: action.payload
            };
        case "CLEAN":
            return initialState;

            default:
            return state;
    }
};
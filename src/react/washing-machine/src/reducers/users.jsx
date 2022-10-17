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
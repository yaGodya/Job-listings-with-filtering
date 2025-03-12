import { ADD_POSITINONS } from "./position-actions";

export const positinReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITINONS: {
            return action.positions;
        }
        default: {
            return state;
        }
    }
};

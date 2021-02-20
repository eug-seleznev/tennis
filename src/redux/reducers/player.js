import { EDIT_PROFILE, GET_PROFILE } from "../types";





const initialState = {
    profile: null,
    isProfile: false
};








export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case EDIT_PROFILE:
            return {
                profile: payload,
                isProfile: true
            }
        case GET_PROFILE:
            return {
                profile: payload,
            }
        default:
            return {
                ...state
            }

        }
    }
    




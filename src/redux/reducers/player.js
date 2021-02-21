import { ALL_PLAYERS, EDIT_PROFILE, GET_PROFILE, MY_INFO } from "../types";





const initialState = {
    profile: null,
    isProfile: false,
    allPlayers: [],
    myInfo:[]
};








export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case EDIT_PROFILE:
            return {
                ...state,
                profile: payload,
                isProfile: true
            }
        case ALL_PLAYERS:
            return {
                ...state,
                isProfile: true,
                allPlayers: payload,
            }
        case GET_PROFILE:
            return {
                ...state,
                isProfile: true,
                profile: payload,
            }
        case MY_INFO:
            return {
                ...state,
                isProfile: true,
                myInfo: payload,
            }
        default:
            return {
                ...state
            }

        }
    }
    




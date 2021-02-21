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
                profile: payload,
                isProfile: true
            }
        case ALL_PLAYERS:
            return {
                allPlayers: payload,
            }
        case GET_PROFILE:
            return {
                profile: payload,
            }
        case MY_INFO:
            return {
                myInfo: payload,
            }
        default:
            return {
                ...state
            }

        }
    }
    




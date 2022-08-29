import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from "../actions/session_actions";
  
const _nullUser = Object.freeze({id: null});
  
const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case RECEIVE_USER_LOGOUT:
            return _nullUser;
        default:
            return state;
    };
};
  
export default sessionReducer;
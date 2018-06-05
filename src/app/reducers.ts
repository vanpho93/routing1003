import { UserInfo } from './types';

export function userReducer(state: UserInfo = null, action): UserInfo {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
}

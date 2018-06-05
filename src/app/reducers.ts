import { UserInfo, Story } from './types';

export function userReducer(state: UserInfo = null, action): UserInfo {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
}

export function storiesReducer(state: Story[] = [], action): Story[] {
    if (action.type === 'SET_STORIES') return action.stories;
    return state;
}

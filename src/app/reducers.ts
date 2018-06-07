import { UserInfo, Story } from './types';

export function userReducer(state: UserInfo = null, action): UserInfo {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
}

export function storiesReducer(state: Story[] = [], action): Story[] {
    if (action.type === 'SET_STORIES') return action.stories;
    if (action.type === 'CREATE_STORY') return [action.story, ...state];
    if (action.type === 'REMOVE_STORY') return state.filter(story => story._id !== action._id);
    if (action.type === 'LIKE_STORY') {
        return state.map(story => {
            if (story._id !== action._id) return story;
            return {...story, fans: [action.idUser, ...story.fans] };
        });
    }
    if (action.type === 'DISLIKE_STORY') {
        return state.map(story => {
            if (story._id !== action._id) return story;
            return {...story, fans: story.fans.filter(f => f !== action.idUser) };
        });
    }
    if (action.type === 'ADD_COMMENT') {
        return state.map(story => {
            if (story._id !== action._id) return story;
            return {...story, comments: [...story.comments, action.comment] };
        });
    }
    return state;
}

import { UserInfo, Story, People } from './types';

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


const defaultPeople: People = {
    friends: [],
    incommingRequests: [],
    sentRequests: [],
    otherUsers: []
};

export function peopleReducer(state: People = defaultPeople, action): People {
    if (action.type === 'SET_PEOPLE') return action.people;
    if (action.type === 'ADD_FRIEND') {
        return {
            ...state,
            sentRequests: [action.user, ...state.sentRequests],
            otherUsers: state.otherUsers.filter(u => u._id !== action.user._id )
        };
    }
    if (action.type === 'CANCEL_REQUEST') {
        return {
            ...state,
            otherUsers: [action.user, ...state.otherUsers],
            sentRequests: state.sentRequests.filter(u => u._id !== action.user._id )
        };
    }
    if (action.type === 'ACCEPT_REQUEST') {
        return {
            ...state,
            friends: [action.user, ...state.friends],
            incommingRequests: state.incommingRequests.filter(u => u._id !== action.user._id )
        };
    }
    if (action.type === 'REMOVE_FRIEND') {
        return {
            ...state,
            otherUsers: [action.user, ...state.otherUsers],
            friends: state.friends.filter(u => u._id !== action.user._id )
        };
    }
    if (action.type === 'DECLINE_REQUEST') {
        return {
            ...state,
            otherUsers: [action.user, ...state.otherUsers],
            incommingRequests: state.incommingRequests.filter(u => u._id !== action.user._id )
        };
    }
    return state;
}

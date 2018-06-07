export interface UserInfo {
    _id: string;
    name: string;
    email?: string;
}

export interface Comment {
    _id: string;
    author: { name: string };
    content: string;
}

export interface Story {
    _id: string;
    content: string;
    author: { name: string };
    comments: Comment[];
    fans: string[];
}

export interface AppState {
    user: UserInfo;
    stories: Story[];
    people: People;
}

export interface People {
    friends: UserInfo[];
    sentRequests: UserInfo[];
    incommingRequests: UserInfo[];
    otherUsers: UserInfo[];
}

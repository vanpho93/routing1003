export interface UserInfo {
    _id: string;
    name: string;
    email: string;
}

export interface Story {
    _id: string;
    content: string;
    fans: string[];
}

export interface AppState {
    user: UserInfo;
    stories: Story[];
}

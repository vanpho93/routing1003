export interface UserInfo {
    _id: string;
    name: string;
    email: string;
}

export interface AppState {
    user: UserInfo;
}

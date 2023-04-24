import {PostType} from "./types/post-type";
import {UserType} from "./types/user-type";

export const AVATAR_PLACEHOLDER = 'https://placeholder.com/40';

export enum AppRoute {
    Main = '/',
    Messenger = '/messenger',
    Photos = '/photos',
    Shorts = '/shorts',
}

export const DEFAULT_TEXT = '';

export const BLANK_POST: PostType = {
    id: NaN,
    text: '',
    time: '',
    user: {
        id: NaN,
        name: '',
        avatar: '',

    }
}

export const BLANK_USER: UserType = {
    id: NaN,
    name: '',
    avatar: '',
}

// export const BLANK_STATE: StateType = {
//     main: {
//         posts: [BLANK_POST],
//         friends: [BLANK_USER],
//         newPostText: DEFAULT_TEXT,
//     },
//     messenger: {
//         users: [BLANK_USER],
//         newMessageText: DEFAULT_TEXT,
//     },
// }
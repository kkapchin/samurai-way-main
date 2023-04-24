import {posts} from "../mocks/posts";
import {users} from "../mocks/users";
import {StateType} from "../types/state-type";
import {friends} from "../mocks/friends";
import {render} from "../render";

const DEFAULT_TEXT = '';

const state: StateType = {
    main: {
        posts: posts,
        friends: friends,
        newPostText: DEFAULT_TEXT,
    },
    messenger: {
        users: users,
        newMessageText: DEFAULT_TEXT,
    },
}

export const addPost = (text: string) => {
    const newPost = {
        id: new Date().getTime(),
        text: text,
        time: '1 min ago',
        user: {
            id: 2,
            name: 'Madarka Alexandrovich',
            avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/83/Jabba-the-hut.jpg?width=640',

        }
    }

    state.main.posts = [newPost, ...state.main.posts];
    state.main.newPostText = DEFAULT_TEXT;
    render(state);
}

export const updateNewPostText = (text: string) => {
    state.main.newPostText = text;
    render(state);
}

export const updateNewMessageText = (text: string) => {
    state.messenger.newMessageText = text;
    render(state);
}

export default state;
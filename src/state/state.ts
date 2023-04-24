import {posts} from "../mocks/posts";
import {users} from "../mocks/users";
import {StateType} from "../types/state-type";
import {friends} from "../mocks/friends";
import {render} from "../render";

const DEFAULT_NEW_POST = '';

const state: StateType = {
    main: {
        posts: posts,
        friends: friends,
        newPostText: DEFAULT_NEW_POST,
    },
    messenger: {
        users: users
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
    state.main.newPostText = DEFAULT_NEW_POST;
    render(state);
}

export const updateNewPostText = (text: string) => {
    state.main.newPostText = text;
    render(state);
}

export default state;
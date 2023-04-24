import {posts} from "../mocks/posts";
import {users} from "../mocks/users";
import {StateType} from "../types/state-type";
import {friends} from "../mocks/friends";
import {DEFAULT_TEXT} from "../const";

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

export default state;
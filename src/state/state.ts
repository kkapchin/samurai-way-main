import {posts} from "../mocks/posts";
import {users} from "../mocks/users";
import {StateType} from "../types/state-type";
import {friends} from "../mocks/friends";

const state: StateType = {
    main: {
        posts: posts,
        friends: friends,
    },
    messenger: {
        users: users
    },
}

export default state;
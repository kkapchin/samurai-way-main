import {posts} from "../mocks/posts";
import {users} from "../mocks/users";
import {StateType} from "../types/state-type";

const state: StateType = {
    main: {
        posts: posts,
    },
    messenger: {
        users: users
    },
}

export default state;
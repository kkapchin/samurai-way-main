import {PostType} from "./post-type";
import {UserType} from "./user-type";

export type StateType = {
    main: {
        posts: Array<PostType>
        friends: Array<UserType>
        newPostText: string
    }
    messenger: {
        users: Array<UserType>
        newMessageText: string
    }
}
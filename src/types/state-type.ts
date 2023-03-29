import {PostType} from "./post-type";
import {UserType} from "./user-type";

export type StateType = {
    main: {
        posts: Array<PostType>
    }
    messenger: {
        users: Array<UserType>
    }
}
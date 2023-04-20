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

export const addPost = (text: string) => {
    const newPost = {
        id: new Date().getTime(),
        text: text,
        time: '1 min ago',
        user: {
            id: 2,
            name: 'Madara Alexandrovich',
            avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/83/Jabba-the-hut.jpg?width=640',

        }
    }

    state.main.posts.push(newPost);
    console.log(state.main.posts)
}

export default state;
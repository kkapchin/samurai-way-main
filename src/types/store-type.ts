import {StateType} from "./state-type";
import {PostType} from "./post-type";

export type StoreType = {
    _state: StateType
    _newPost: PostType
    _onChange: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
    updateNewMessageText: (text: string) => void
}

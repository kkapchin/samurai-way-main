import {BLANK_POST, DEFAULT_TEXT} from "../const";
import state from "../state/state";
import {StoreType} from "../types/store-type";

const store: StoreType = {
    _state: state,
    _newPost: BLANK_POST,
    _onChange: () => {},

    getState () {
        return this._state;
    },

    subscribe (observer) {
        this._onChange = observer;
    },

    addPost (text) {
        this._newPost = {
            id: new Date().getTime(),
            text: text,
            time: '1 min ago',
            user: {
                id: 2,
                name: 'Madarka Alexandrovich',
                avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/83/Jabba-the-hut.jpg?width=640',

            }
        }

        this._state.main.posts = [this._newPost, ...this._state.main.posts];
        this._state.main.newPostText = DEFAULT_TEXT;
        this._onChange();
    },

    updateNewPostText (text) {
        this._state.main.newPostText = text;
        this._onChange();
    },

    updateNewMessageText (text) {
        this._state.messenger.newMessageText = text;
        this._onChange();
    }
}

export default store;
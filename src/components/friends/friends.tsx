import {UserType} from "../../types/user-type";
import Friend from "./friend/friend";

type FriendsPropsType = {
    friends: Array<UserType>
}

export default function Friends ({ friends }: FriendsPropsType) {
    return (
        <div className="side-block__container grad-border">
            <div className="side-block__content grad-bordered">
                <h6 className="title">Friends</h6>
                {friends.map(f => <Friend key={f.id} user={f} />)}
            </div>
        </div>
    );
}
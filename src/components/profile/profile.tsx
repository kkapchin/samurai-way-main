export default function Profile() {
    return (
        <div className="profile__container">
            <div className="d__flex align__c">
                <img className="profile__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_-_Xc8u7HQEVA66YYznJZwFctc06g3wFhKajU_BAVZb1BiFXBd8qChGfjK8WBkfALq0&usqp=CAU" alt="profile-avatar"></img>
                <span className="profile__name">Ivo Namtar Wijers</span>
            </div>
            <div>
                <button className="btn__edit-profile">Edit profile</button>
            </div>
        </div>
    );
}

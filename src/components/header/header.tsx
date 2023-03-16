import Navbar from "../navbar/navbar";
import Profile from "../profile/profile";

export default function Header() {
    return (
        <div className="header__container">
            <img className="header-background__img" src="https://bootdey.com/img/Content/bg1.jpg" alt="background"></img>
            <Navbar />
            <Profile />
        </div>
    );
}

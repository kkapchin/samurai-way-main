import Navbar from "../navbar/navbar";
import Profile from "../profile/profile";

export default function Header() {
    return (
        <div className="header__wrap grad-border">
            <div className="header__container grad-bordered">
                <Profile />
                <Navbar />
            </div>
        </div>
    );
}

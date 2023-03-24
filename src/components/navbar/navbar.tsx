import {NavLink} from "react-router-dom";
import {AppRoute} from "../../const";

export default function Navbar() {
    return (
        <div className="navbar__container">
            <ul className="navbar">
                <li className="nav__item">
                    <NavLink to={AppRoute.Main} >Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={AppRoute.Messenger} >Messenger</NavLink>
                </li>
                <li className="nav__item">
                    <a href="/" >Photos</a>
                </li>
                <li className="nav__item">
                    <a href="/" >Shorts</a>
                </li>
            </ul>
        </div>

    );
}

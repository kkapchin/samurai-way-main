import {NavLink} from "react-router-dom";
import {AppRoute} from "../../const";

export default function Navbar() {
    return (
        <div className="navbar__container">
            <ul className="navbar">
                <li className="nav__item">
                    <NavLink exact to={AppRoute.Main} >Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={AppRoute.Messenger} >Messenger</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={AppRoute.Photos} >Photos</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={AppRoute.Shorts} >Shorts</NavLink>
                </li>
            </ul>
        </div>

    );
}

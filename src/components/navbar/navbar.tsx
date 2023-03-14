export default function Navbar() {
    return (
        <div className="navbar__container">
            <ul className="navbar">
                <li className="active nav__item">
                    <a href="/" >Home</a>
                </li>
                <li className="nav__item">
                    <a href="/" >Messenger</a>
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

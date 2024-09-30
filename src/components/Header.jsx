import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <h1>Header</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/grade">Grade</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;

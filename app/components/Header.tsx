import { Link } from "remix";

export default function Header() {
    return (
        <header className="navbar bg-neutral fixed left-0 bottom-0 md:relative z-50">
            <Link className="navbar-start px-2 mx-2 text-xl hidden md:block font-bold" to='/'>Joseph Khawly</Link>
            <div className="navbar-start md:hidden" />
            <div className="navbar-center md:navbar-end">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className="btn btn-ghost" to='/'>Home</Link></li>
                    <li><Link className="btn btn-ghost" to='/about'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end md:hidden"></div>
        </header>
    )
}
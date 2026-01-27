import Link from "next/link";

export default function Header() {
    return (
        <header className="navbar  md:relative z-50">
            <Link className="navbar-start px-2 mx-2 text-xl hidden md:block font-bold" href='/'>Joseph Khawly</Link>
            <div className="navbar-start md:hidden" />
            <div className="navbar-center md:navbar-end">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className="btn btn-ghost" href='/'>Home</Link></li>
                    {/* <li><Link className="btn btn-ghost" href='/about'>About</Link></li> */}
                </ul>
            </div>
            <div className="navbar-end md:hidden"></div>
        </header>
    )
}
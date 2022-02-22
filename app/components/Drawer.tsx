import { NavLink } from "remix";

export default function Drawer() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </div>
    )
}
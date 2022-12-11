// Functional Component
function Navbar({judul, navValue}) {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <span className="btn btn-ghost normal-case text-xl">{judul}</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><span>Item 1</span></li>
                    <li><span>{!navValue ? "Item 2" : navValue}</span></li>
                </ul>
            </div>
            <div className="navbar-end">
                <span className="btn">Get started</span>
            </div>
        </div>
    );
}

export default Navbar;
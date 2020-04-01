import React from 'react'

function TopMenu() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">



                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="http://localhost:3000/users/logout" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 medium">Cerrar sesión</span>
                        <img className="img-profile rounded-circle" src="images/logo.jpeg" width="60" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default TopMenu;
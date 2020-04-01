import React from 'react'



function Navbar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                <img className="img-profile rounded-circle" src="images/logo.jpeg" width="60" />
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Acciones</div>

            <li className="nav-item">
                <a className="nav-link collapsed" target="_blank" rel="nofollow" href={"http://localhost:3000/products/product-create"}>
                <i className="fas fa-plus-square"></i>
                    <span>Cargar producto</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" target="_blank" rel="nofollow" href="http://localhost:3000/products/edit/">
                <i className="fas fa-edit"></i>
                    <span>Editar producto</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" target="_blank" rel="nofollow" href="http://localhost:3000/products/delete/">
                <i className="fas fa-trash-alt"></i>
                    <span>Eliminar producto</span></a>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )
}

export default Navbar;
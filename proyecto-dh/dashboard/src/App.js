import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TopMenu from './TopMenu';
import Card from './Card';

function App() {
  return (
    <div id="wrapper">
      <Navbar />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">
          <TopMenu />


          <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">J&M Clothes Dashboard</h1>
            </div>

            <div className="row">
              <Card
                title="Total de productos en la Base de Datos"
                value="135"
                icon="fas fa-clipboard-list fa-2x text-gray-300" />

              <Card
                title="Total de categorías"
                value="4"
                icon="fas fa-align-left fa-2x text-gray-300" />

              <Card
                title="Cantidad total de usuarios"
                value="38"
                icon="fas fa-user-check fa-2x text-gray-300" />
            </div>

            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Último producto en la Base de Datos</h6>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="images/dummy-avatar.jpg" alt="image dummy" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <button type="button" className="btn btn-dark"><a target="_blank" rel="nofollow" href="/">Ver detalle del producto</a></button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorías en la Base de Datos</h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                            Categoría 01
												</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                            Categoría 02
												</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                            Categoría 03
												</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                            Categoría 04
												</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; 1999-2020 J&M Clothes S.R.L</span>
            </div>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
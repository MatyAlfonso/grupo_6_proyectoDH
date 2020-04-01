import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TopMenu from './TopMenu';
import Card from './Card';
import Card1 from './Card1';
import Card2 from './Card2';
import BigCard from './BigCard';
import CategoryCard from './CategoryCard';

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
                icon="fas fa-clipboard-list fa-2x text-gray-300" />

              <Card1
                title="Total de productos por categorías"
                icon="fas fa-align-left fa-2x text-gray-300" />

              <Card2
                title="Cantidad total de usuarios"
                icon="fas fa-user-check fa-2x text-gray-300" />
            </div>

            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Último producto en la Base de Datos</h6>
                  </div>
                  <BigCard />
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorías en la Base de Datos</h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      < CategoryCard value="Hombres" />
                      < CategoryCard value="Mujeres"/>
                      < CategoryCard value="Kids" />
                      < CategoryCard value="Ofertas"/>                     
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
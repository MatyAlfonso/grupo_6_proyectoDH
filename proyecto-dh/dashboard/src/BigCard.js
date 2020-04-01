import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BigCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: "",
            description: ""
        }
    }

    apiCall(url, handler) {
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        console.log("Me monté!");
        this.apiCall("http://localhost:3000/api/products", this.mostrarProducto)
    }

    mostrarProducto = (data) => {
        console.log(data)
        let ultimoProducto = data.meta.count - 1;
        this.setState(
            {
                value: data.data[ultimoProducto].name,
                image: data.data[ultimoProducto].image,
                description: data.data[ultimoProducto].description,
                id: data.data[ultimoProducto].id
            }
        )
    }

    componentDidUpdate() {
        console.log("Me actualicé!");
    }

    render() {
        console.log("Estoy renderizando!");

        return (
            <div className="card-body">
                <div className="text-center text-s font-weight-bold text-primary text-uppercase mb-1">
                    {this.state.value}
                </div>
                <div className="text-center">
                    <img src={'http://localhost:3000/images/products/' + this.state.image} width="200" />
                </div>
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    {this.state.description}
                </div>
                <a target="_blank" rel="nofollow" href={"http://localhost:3000/products/product-detail/" + this.state.id}><button type="button" className="btn btn-dark">Ver detalle del producto</button></a>

            </div>
        )

    }
}
export default BigCard;






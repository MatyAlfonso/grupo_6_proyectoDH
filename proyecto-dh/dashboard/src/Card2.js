import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
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
        this.apiCall("http://localhost:3000/api/users", this.mostrarProducto)
    }

    mostrarProducto = (data) => {
        this.setState(
            {
                value: data.meta.count
            }
        )
    }

    componentDidUpdate() {
        console.log("Me actualicé!");
    }

    render() {
        console.log("Estoy renderizando!");

        return (
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    {this.props.title}
                                </div>
                                <div className="h3 mb-0 font-weight-bold text-gray-800">
                                    {this.state.value}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className={this.props.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default Card2;


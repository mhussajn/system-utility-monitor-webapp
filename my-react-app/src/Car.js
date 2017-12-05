import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

class Car extends Component {
    constructor (props) {
        super(props);
        this.state = {
            towho: ''
        }
    }

    handleClick = () => {
        this.props.onDelete(this.props.id);
    }

    handleRentClick = () => {
        this.props.onRent(this.props.id)
    }

    render() {
        return (
        
         <div className="car container">
            <div className="row">
                <div className="col-xs-6 text-left">
                    <h2>{this.props.model}</h2>
                    <h3>Producent: {this.props.manufacturer}</h3>
                    {this.props.tags.map((element, i) => {
                        return <button className="btn btn-default" key={i}>#{element}</button>;
                    })}
                </div>
                <div className="col-xs-6 text-right">
                    <h2>Status: {this.props.rented === 1? 'Wypożyczono' : 'Na miejscu'}</h2>
                    {
                        this.props.rented === 0.5 ? <input id="towho" type="text" placeholder="Napisz komu i kiedy" onChange={this.handleChange} value={this.state.towho}/> : <br/>
                    }
                    {
                        this.props.rented ? <h4>{this.props.towho}</h4> : <br/>
                    }
                    {
                        this.props.rented === 0.5 ? 
                        <button onClick={this.handleRentClick} className="btn btn-default">Potwierdź</button> : this.props.rented ? 
                        <button onClick={this.handleRentClick} className="btn btn-default">Oddaj</button> : <button onClick={this.handleRentClick} className="btn btn-default">Wypożycz</button> 
                    }
                    <br/>
                    <button onClick={this.handleClick} className="btn btn-default">Usuń</button>
                </div>                       
            </div>
        </div>
        )
    }
}

export default Car;

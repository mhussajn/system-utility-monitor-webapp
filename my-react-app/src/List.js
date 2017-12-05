import React, {Component} from 'react';
import Car from './Car'


class List extends Component {
    render() {
        return (
            <div>
            {this.props.cars.map((elem, i) => {
                return <Car key={i} id={i} model={elem.model} manufacturer={elem.manufacturer} tags={elem.tags} towho={elem.towho} rented={elem.rented} onDelete={this.props.onDelete} onRent={this.props.onRent}/>
            })}
            </div> 
        )       
    }
}

export default List;
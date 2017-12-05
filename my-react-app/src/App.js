import React, { Component } from 'react';

import Header from './Header';
import List from './List';
import Filter from './Filter';
import Add from './Add';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state ={
      cars: [
        {
            model: 'Model S',
            manufacturer : 'Tesla',
            tags: ['elektryczny'],
            rented: 0,
            towho: ''
        },
        {
            model: 'Roadster',
            manufacturer: 'Tesla',
            tags: ['elektryczny','szybki'],
            rented: 0,
            towho: ''
        },
        {
            model: 'Lanos',
            manufacturer: 'Daewoo',
            tags: ['bieda','niezniszczalny'],
            rented: 0,
            towho: ''
        }
    ]
    //this.addNew = this.addNew.bind(this);
    }
  }

  addNew = (values) => {
    values.tags = values.tags.split(',');

    this.setState({
      cars: this.state.cars.concat(values)
    })
  }

  deleteCar = (index) => {
    let cpArray = this.state.cars;
    cpArray.splice(index, 1);    
    this.setState({
      cars: cpArray
    })
  }

  rentCar = (index) => {
    let cpArray = this.state.cars;
    if (this.state.cars[index].rented === 0 || this.state.cars[index].rented === 0.5) {
      cpArray[index].rented += 0.5;
    } else {
      cpArray[index].rented = 0
    }
    console.log(cpArray[index].rented)
    this.setState({
      cars: cpArray
    })
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <Filter tags={this.state.cars.map((element => element.tags))}/>
          <List cars={this.state.cars} onDelete={this.deleteCar} onRent={this.rentCar}/>
          <Add onSubmit={this.addNew}/>          
      </div>    
    );
  }

}
export default App;

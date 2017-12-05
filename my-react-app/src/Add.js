import React, {Component} from 'react';

export class Add extends Component {
    constructor (props) {
        super(props);
        this.state = {
            model: '',
            manufacturer: '',
            tags: ''
        }
    }

    handleClick = (event) => {
        this.props.onSubmit(this.state);
        this.setState({
            model: '',
            manufacturer: '',
            tags: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render() {
        return (
            <div className="container">                
                <div className="row text-left">
                    <div className="col-xs-12">
                        <h2>Dodaj auto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <input id="model" type="text" placeholder="Model" onChange={this.handleChange} value={this.state.model}/>
                    </div>
                    <div className="col-xs-4">
                        <input id="manufacturer" type="text" placeholder="Manufacturer" onChange={this.handleChange} value={this.state.manufacturer}/>
                    </div>
                    <div className="col-xs-4">
                        <input id="tags" type="text" placeholder="Tagi" onChange={this.handleChange} value={this.state.tags}/>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-12 text-right">
                        <button className="btn btn-default" onClick={this.handleClick} >Dodaj</button>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Add;

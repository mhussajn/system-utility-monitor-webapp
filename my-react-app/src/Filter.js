import React, {Component} from 'react';

class Filter extends Component {


    render() {
        return (
            
            <div className="container">
                {this.props.tags.reduce((a,b) => a.concat(b))
                                .filter((element,index,self) => {return index === self.indexOf(element);})
                                .map((element)=>{return <button className="btn btn-default">{element}</button>})                               
                }
            </div>   
        )     
    }
}

export default Filter;

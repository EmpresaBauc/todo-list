import React, { Component } from 'react'

export default class Form extends Component {
    
    constructor (props){
        super (props);
        this.state = {input1: 123 , input2 : ""};
    }

    click = (event) => {this.setState({input1 : this.state.input1 + 1 })}

    changeText = (event) => {        
        this.setState({input2 : event.target.value});
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.state.input1}
                <button onClick={this.click}>
                    Incremento
                </button>
                <br/>
                <input type="text" onChange={this.changeText} value={this.state.input2}></input>
            </div>
        )
    }
}

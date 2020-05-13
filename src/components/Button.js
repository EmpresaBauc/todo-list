import React, { Component } from 'react'


export default class Button extends Component {
    
    
     constructor (props){
        super (props);
    }

    click (){
        window.location.href = '/cadastro';
    }

    
    render() {
        return (
            <div>
                <button onClick={this.click}>
                    Cadastro
                </button>
            </div>
        )
    }
}

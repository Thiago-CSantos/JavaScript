/* eslint-disable prettier/prettier */
import React, { Component } from "react";
 import "./Main.css";

// Icons para Form
import {FaPlusCircle} from "react-icons/fa";

export default class Main extends Component {

    state = {
        novaTarefa: '',
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value
        });
    }


    render() {
        // criação de uma variavel novaTarefa
        const { novaTarefa } = this.state

        return (
            <div className="main">
                <h1>Lista de tarefa</h1>
                <form action="#" className="formulario">
                    <input onChange={this.handleChange} type="text" value={novaTarefa} />
                    <button type="submit" >{<FaPlusCircle/>}</button>
                </form>
            </div>
        );
    }
}

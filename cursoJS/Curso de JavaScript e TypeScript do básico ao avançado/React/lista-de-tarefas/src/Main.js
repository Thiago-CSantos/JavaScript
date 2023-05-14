/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./Main.css";

// Icons para Form
import { FaPlusCircle } from "react-icons/fa";

export default class Main extends Component {

    state = {
        novaTarefa: '',
        trefas: ['tomar café', 'Beber água', 'estudar'],
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value
        });
    }


    render() {
        // criação de uma variavel novaTarefa
        const { novaTarefa, tarefas } = this.state

        return (
            <div className="main">
                <h1>Lista de tarefa</h1>
                <form action="#" className="formulario">
                    <input onChange={this.handleChange} type="text" value={novaTarefa} />
                    <button type="submit" >{<FaPlusCircle />}</button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((value) => (
                        <li key={tarefas}> {value} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

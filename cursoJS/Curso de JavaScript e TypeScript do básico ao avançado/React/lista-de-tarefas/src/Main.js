/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import "./Main.css";

// Icons para Form
import { FaPlusCircle, FaEdit, FaWindowClose } from "react-icons/fa";


export default class Main extends Component {

    state = {
        novaTarefa: '',
        tarefas: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;

        novaTarefa = novaTarefa.trim();
        if (tarefas.indexOf(novaTarefa) != -1) {
            return;
        }
        const copiaNovaTarefas = [...tarefas];

        this.setState({
            tarefas: [...copiaNovaTarefas, novaTarefa]
        });

    }

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
                <form onSubmit={this.handleSubmit} action="#" className="formulario">
                    <input onChange={this.handleChange} type="text" value={novaTarefa} />
                    <button type="submit" >{<FaPlusCircle />}</button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((value) => (
                        <li key={value}>
                            {value}
                            <span>
                                <FaEdit className="edit" />
                                <FaWindowClose className="close" />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

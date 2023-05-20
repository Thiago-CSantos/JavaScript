/* eslint-disable prettier/prettier */
import React, { Component } from "react";

import "./Main.css";
import Form from "./Form/form";
import Tarefas from "./Tarefas/tarefas";

export default class Main extends Component {

    state = {
        novaTarefa: '',
        tarefas: [],
        i: -1,
    };

    componentDidMount() {
        const enviarTarefas = JSON.parse(localStorage.getItem("Chave:"))

        if (!enviarTarefas) {
            return;
        }

        this.setState({
            tarefas: enviarTarefas
        })
    }
    // prevProps- propriedades anteriores
    // prevState - estado anterior
    componentDidUpdate(prevProps, prevState) {

        const tarefas = this.state.tarefas

        if (tarefas == prevState.tarefas) {
            return;
        }

        localStorage.setItem("Chave:", JSON.stringify(tarefas))
        console.log(prevState.tarefas);
    }



    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, i } = this.state; // outra forma de escrever const tarefas = this.state.tarefas
        let { novaTarefa } = this.state;

        novaTarefa = novaTarefa.trim();
        if (tarefas.indexOf(novaTarefa) != -1) {
            return;
        }
        const copiaNovaTarefas = [...tarefas];

        if (i == -1) {
            this.setState({
                tarefas: [...copiaNovaTarefas, novaTarefa],
                novaTarefa: ""
            });
        } else {
            const tarefasNovas = [...tarefas]
            tarefasNovas[i] = novaTarefa

            this.setState({
                tarefas: [...tarefasNovas],
                i: -1,
                novaTarefa: ""
            })
        }

    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value
        });
    }

    handleEdit = (e, index) => {

        const tarefas = this.state.tarefas

        this.setState({
            i: index,
            novaTarefa: tarefas[index],
        })
        console.log(index);
    }

    handleClose = (e, index) => {

        const { tarefas } = this.state // const tarefas = this.state.tarefas
        const novasTarefas = [...tarefas]
        novasTarefas.splice(index, 1)

        this.setState({
            tarefas: [...novasTarefas]
        })

        console.log("Close", index);
    }

    render() {
        // criação de uma variavel novaTarefa
        const { novaTarefa, tarefas } = this.state

        return (
            <div className="main">
                <h1>Lista de tarefa</h1>
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />
                <Tarefas
                    handleEdit={this.handleEdit}
                    handleClose={this.handleClose}
                    tarefas={tarefas}
                />
            </div>
        );
    }
}

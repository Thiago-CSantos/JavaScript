import React from "react";
import Props from "prop-types";

import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./tarefas.css";

export default function Tarefas(handleEdit, handleClose, tarefas) {
    return (
        <ul className="tarefas">
            {tarefas.map((value, index) => (
                <li key={value}>
                    {value}
                    <span>
                        <FaEdit
                            className="edit"
                            onClick={(e) => handleEdit(e, index)}
                        />
                        <FaWindowClose
                            className="close"
                            onClick={(e) => handleClose(e, index)}
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}

Tarefas.fazendoPropTypes = {
    tarefas: Props.string.isRequired,
    handleEdit: Props.func.isRequired,
    handleClose: Props.func.isRequired,
};

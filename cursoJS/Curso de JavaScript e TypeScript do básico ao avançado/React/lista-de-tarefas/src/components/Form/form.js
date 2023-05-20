import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

import { FaPlusCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function Form({ handleSubmit, handleChange, novaTarefa }) {
    return (
        <form onSubmit={handleSubmit} action="#" className="formulario">
            <input onChange={handleChange} type="text" value={novaTarefa} />
            <button type="submit">{<FaPlusCircle />}</button>
        </form>
    );
}

Form.fazendoPropTtypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
};

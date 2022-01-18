import React, { Component } from "react";
import { Grilla } from "../styles/Estilos";
import Cards from "./Cards";

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            tarjetas: [],
        };
    }

    async componentDidMount() {
        const url = "https://rickandmortyapi.com/api/character/ ";
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        console.log(data);
        const { results } = data;
        this.setState({ tarjetas: results });
    }

    render() {
        return (
            <Grilla>
                {this.state.tarjetas.map((tarjeta, index) => (
                    <Cards key={tarjeta.id} tarje={tarjeta} />
                ))}
            </Grilla>
        );
    }
}

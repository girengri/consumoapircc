import React, { Component } from "react";
import List from "../components/List";
import { Contenedorp, Tprincipal } from "../styles/Estilos";

export default class Container extends Component {
  render() {
    return (
      <Contenedorp>
        <Tprincipal>Rick And Morty</Tprincipal>
        <hr />
        <List />
      </Contenedorp>
    );
  }
}

import React, { Component } from "react";
import logo from '../recursos/logo.png';

class Choose extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="question">
          <h1>Cuánto tiempo tienes?</h1>
        </div>
        <div className="firstButtons">
          <button type="button" class="btn btn-outline-warning">
            30 minutos o menos
          </button>
          <button type="button" class="btn btn-outline-warning">
            30 a 60 minutos
          </button>
        </div>

        <div className="secondButtons">
          <button type="button" class="btn btn-outline-warning">
            1 a 2 horas
          </button>
          <button type="button" class="btn btn-outline-warning">
            2 horas o más
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Choose;

import React, { Component } from 'react';

class Choose extends Component {

    render() {
        return (

            <div className='firstButtons'>
                <button type="button" class="btn btn-outline-warning">30 minutos o menos</button>
                <button type="button" class="btn btn-outline-warning">30 a 60 minutos</button>
            </div>

            <div className='secondButtons'>
                <button type="button" class="btn btn-outline-warning">1 a 2 horas</button>
                <button type="button" class="btn btn-outline-warning">2 horas o más</button>
            </div>

        )






    }


}

export default Choose;
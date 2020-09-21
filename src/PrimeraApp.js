// Functional component
//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ( { saludo, subtitulo } ) => {

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify(saludo, null, 4) } </pre> */}
            <p> { subtitulo } </p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera App'
}

export default PrimeraApp;
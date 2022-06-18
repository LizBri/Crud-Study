import React, { Fragment } from "react";

const Bienvenida = (props) => {
    console.log(props);
    const {nombre} = props;
    // '{nombre}' esta constante se define como object extracter
    return(
        <Fragment>
            <h2>Bienvenida {nombre}</h2>
        </Fragment>
    )
};

export default Bienvenida;
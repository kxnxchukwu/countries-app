import React from "react";

export default function Image(props) {
    return(
        <img className = "img img-thumbnail rounded-0 border border-dark" src = {props.flagSrc} alt={props.flagAlt} />
    );
}
import React from 'react';

export default function Card(props) {

    return (<div onClick={(e) => props.handleShow(e, props.data)} key = {props.name} className="card col-3 col-sm-12 mx-sm-auto m-3 p-3" style={{width: "18rem"}}>
                <img className = "img rounded-0 border border-dark" src = {props.flag} alt={props.name} />
                <div className = "details">
                <h2 className="country">{props.name}</h2>
                </div>
            </div>
            );
}
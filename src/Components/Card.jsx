import React from 'react';

export default function Card(props) {

    return (<div onClick={(e) => props.handleShow(e, props.data)} key = {props.name} className="card col-6 m-3 p-4" style={{width: "18rem"}}>
                <img className = "img" src = {props.flag} alt={props.name} />
                <div className = "details">
                <h2 className="country">{props.name}</h2>
                <h4>Population: <span>{props.population}</span></h4>
                <h4>Region: <span>{props.region}</span></h4>
                <h4>Capital: <span>{props.capital}</span></h4>
                </div>
            </div>
            );
}
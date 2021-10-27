import React from 'react';
import Reveal from 'react-reveal/Reveal';

export default function Card(props) {

    return (<Reveal opposite={true} effect="fadeInUp" durationOut={1000}>
    <div onClick={(e) => props.handleShow(e, props.data)} key = {props.name} className="card shadowgi col-4 col-sm-12 mx-sm-auto m-3 p-3" style={{width: "18rem"}}>
                <img className = "img img-thumbnail rounded-0 border border-dark" src = {props.flag} alt={props.name} />
                <div className = "details">
                <h2 className="h2">{props.name}</h2>
                </div>
    </div>
    </Reveal>);
}
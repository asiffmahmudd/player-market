import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faFlag } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {

    let {full_name, img, birth, country} = props.player;
    return (
        <div className="card col-md-3 m-4 p-0" style={{width: "18rem"}}>
            <img className="card-img-top" src={img} alt="picture"/>
            <div className="card-body">
                <h5 className="card-title">{full_name}</h5>
                <p className="card-text"><FontAwesomeIcon icon={faBirthdayCake} /> {birth}</p>
                <p className="card-text"><FontAwesomeIcon icon={faFlag} /> {country}</p>
                <button onClick={() => {props.addPlayer(props.player)}} className="btn btn-primary">Add Player</button>
            </div>
        </div>
    );
};

export default Player;
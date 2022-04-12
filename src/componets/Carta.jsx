import React from 'react';
import Sets from './Sets';
const Carta = (props) => {
    const sets = props.sets
    return (
        <div className='carta'>
            <img src={props.img} />
            <p className='titulo'>{props.name}</p>
            <p>ATK:{props.atk} / DEF: {props.def}</p>
            <p>{props.desc}</p>
            {sets && sets.map(item => <Sets name={item.set_name}/>) }
        </div>
    );
};

export default Carta;
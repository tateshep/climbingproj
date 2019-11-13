import React from 'react';

const workout = props => (
    <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={props.delete} className="btn btn-error btn-ghost">Delete</button>
        <hr />
    </div>
);

export default workout;

import React from 'react';

const baseFitness = (props) => (
    <form>
        <fieldset>
            <legend>New {props.workoutType} Workout</legend>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input onChange={(event) => props.titleChange(event)} id="title" type="text" placeholder='title'/>
            </div>
        
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea style={{width: '100%',height: '40vh'}} id="description" type="textarea" placeholder="test description" />
            </div>
            <div className="form-group">
                <label htmlFor="warmup">Warm up</label>
                <textarea style={{width: '100%',height: '10vh'}} id="warmup" type="textarea" placeholder="test warm up" />
            </div>

        </fieldset>
    </form>
)

export default baseFitness;
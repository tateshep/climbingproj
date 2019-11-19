import React from 'react';

const baseFitness = (props) => (
    <form>
        <fieldset>
            <legend>New {props.workoutType} Workout</legend>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input onChange={(event) => this.titleChangedHandler(event)} id="title" type="text" placeholder='Performance Workout'/>
            </div>
        
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea onChange={(event) => this.descriptionChangedHandler(event)} style={{width: '100%',height: '40vh'}} id="description" type="textarea" placeholder="test description" />
            </div>
            <div className="form-group">
                <label htmlFor="warmup">Warm up</label>
                <textarea onChange={(event) => this.descriptionChangedHandler(event)} style={{width: '100%',height: '10vh'}} id="warmup" type="textarea" placeholder="test warm up" />
            </div>

        </fieldset>
    </form>
)

export default baseFitness;
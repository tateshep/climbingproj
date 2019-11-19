import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';
import classes from './Navigation.module.css';

const style = {
    root: 
    {
    borderBottom : 'solid 1px black',
    backgroundColor: '#3f3f3f',
    padding: '10px 10px',
    width: '100%',
    position: 'fixed',
    top: '0',
    zIndex: '1000'
    },

    flexDiv: {
        display: 'flex',
        flexDirection: 'row',
        flexAlign: 'center',
        justifyContent: 'space-around'
    },
}

const navigation = (props) => {

    const mobileNav = null;

    if (props.mobileNav) {
        return (
            <>
                <Modal/>
                <div className={`${classes.mobileNav}`}>
                <button onClick={props.mobileNavToggle} className="btn btn-default" >Close</button>

                    <ul>
                        <li>
                            <NavLink to="/" exact className="menu-item">New</NavLink>
                        </li>
                        <li>
                            <NavLink to="/history" className="menu-item">History</NavLink>
                        </li>
                        <li>
                            <NavLink to="/goals" className="menu-item">Goals</NavLink>
                        </li>
                        <li>
                            <NavLink to="/modivation" className="menu-item">Modivation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tools" className="menu-item">Tools</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={style.root} className={`${classes.desktopOnly} terminal-nav`}>
                <nav className="terminal-menu">
                    <ul style={style.flexDiv}>
                        <li>
                            <NavLink to="/" exact className="menu-item">New</NavLink>
                        </li>
                        <li>
                            <NavLink to="/history" className="menu-item">History</NavLink>
                        </li>
                        <li>
                            <NavLink to="/goals" className="menu-item">Goals</NavLink>
                        </li>
                        <li>
                            <NavLink to="/modivation" className="menu-item">Modivation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tools" className="menu-item">Tools</NavLink>
                        </li>
                    </ul>
                </nav>
            </div> 

            <button onClick={props.mobileNavToggle} className="btn btn-default" >Nav</button>

            { mobileNav }

        </>
    )
};

const mapStateToProps = (state) => {
    return {
        mobileNav : state.mobileNav,
        mobileModal : state.mobileModal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        mobileNavToggle : () => dispatch({type: 'TOGGLE_MOBILE_NAV'}),
        modalToggle : () => dispatch({type: 'TOGGLE_MODAL'})

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(navigation);
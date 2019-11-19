import React from 'react';
import { NavLink } from 'react-router-dom';
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

const navigation = () => {
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

            <div className={`${classes.mobileNav}`}>
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
};

export default navigation;
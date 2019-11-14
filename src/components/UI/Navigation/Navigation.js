import React from 'react';

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
    }
    
}

const navigation = () => {
    return (
        <div style={style.root} className="terminal-nav">
            <nav className="terminal-menu">
                <ul style={style.flexDiv}>
                    <li>
                        <div className="terminal-logo">
                            <div className="logo terminal-prompt"></div>
                        </div>
                    </li>
                    <li>
                        <a className="menu-item">History</a>
                    </li>
                    <li>
                        <a className="menu-item">New</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default navigation;
import React from 'react';

const style = {
    borderBottom : 'solid 1px black',
    boxShadow : '0px 1px 2px black',
    width: '100%',
    position: 'fixed',
    
}

const navigation = () => {
    return (
        <div style={style} className="terminal-nav">
            <div className="terminal-logo">
                <div className="logo terminal-prompt">
                    Commit

                </div>
            </div>
            <nav className="terminal-menu">
                <ul>
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
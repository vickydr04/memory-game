import React from 'react';
import navStyles from './Nav.module.scss'

const Nav = () => {
    return (
        <header className={navStyles.Navigation}>
            <nav>
                <h2>Github Memory</h2>
            </nav>
        </header>
    );
}

export default Nav;
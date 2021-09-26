import React from 'react';
import style from '../Header/Header.css'

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <h1 className='header-text'><span className='highlight-text'>Programming Teacher</span> Meet -2021</h1>
                <h4>Education is a foundation for a better future.Tecaheris The Nation Builder. So <span className='highlight-text'>Best Summit is Teacher meet up Summit.</span></h4>
                <h1 className='budget-text'>Total Budget $10000</h1>
                <hr />
            </div>
        </div>
    );
};

export default Header;
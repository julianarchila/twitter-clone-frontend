import React from 'react';
import '../styles/app/hamburger.css';

const Hamburger = () => {
    const handleClick = (e: any) => {
        const toggleHamburger: boolean = e.target.classList.toggle('open');
        if(toggleHamburger === true){
            document.querySelector('.header')?.classList.add('header-transition')
        }
        else{
            document.querySelector('.header')?.classList.remove('header-transition')
        }
    }
    return(
        <div className="hamburger">
            <button className="hamburger-button" onClick={handleClick}>
                <span className="top-line"></span>
                <span className="middle-line"></span>
                <span className="bottom-line"></span>
            </button>
        </div>
    )
}

export default Hamburger;
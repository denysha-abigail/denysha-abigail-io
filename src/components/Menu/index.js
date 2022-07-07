import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/menu.css';

function Menu() {
    let toggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    function toggleClick() {
        console.log('clicked');
        menu.className.toggle('active');
    }

    return (
        <div className="menu">
            <div className="toggle" onClick={toggleClick}><i class="fa-solid fa-plus"></i></div>
            <li >
                <a href="#"><i className="fa-solid fa-earth-americas"></i></a>
            </li>
            <li >
                <a href="#"><i className="fa-solid fa-user-astronaut"></i></a>
            </li>
            <li >
                <a href="#"><i className="fa-solid fa-satellite"></i></a>
            </li>
            <li >
                <a href="#"><i className="fa-solid fa-shuttle-space"></i></a>
            </li>
            <li >
                <a href="#"><i className="fa-brands fa-github"></i></a>
            </li>
            <li >
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </li>
        </div>
    )
};

export default Menu;
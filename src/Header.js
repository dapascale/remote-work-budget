import React, { Component } from 'react';
import './App.css';
import logo from './assets/iconsRWB.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
const plane = <FontAwesomeIcon icon={faPaperPlane} />

class Header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <div className="headerContent">
                        <div className="logo">
                            <img src={logo} alt="Logo for the app Remote Work Budget"/>
                        </div>
                        <h1>
                            <span className="logoSlide">Remote</span> <span className="logoSlide">Work<span className="plane">{plane}</span></span> <span className="logoSlide">Budget</span>
                        </h1>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
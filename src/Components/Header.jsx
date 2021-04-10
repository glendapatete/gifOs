import React, { useContext } from 'react'
import "../App.css";
import { AppContext } from './AppContext'

export default function Header(){
    const { setIsDarkMode } = useContext(AppContext);

    const handleChange = (e) => {
        setIsDarkMode(!e.target.checked);
    };

    return(
        <header>
            <div><img src="./images/logo-desktop.svg" alt=""/></div>
            <div className="content-button">
                <label className="dark-light-label" htmlFor="checkbox">
                    <input onChange={handleChange} type="checkbox" className="dark-light-button" id="checkbox" />
                    Modo dark 
                </label>
            </div>
        </header>
    )
}

import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {
    const  [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo">Las agujas de Alita</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#">Inicio</a>
                <a href="#">Prendas para vestir</a>
                <a href="#">Almohadones</a>
                <a href="#">Caminos</a>
            </div>
            <div className={`nav_toogle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar
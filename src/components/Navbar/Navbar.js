import { useState } from "react"
import { Link } from "react-router-dom"
import {BiChevronRightCircle} from "react-icons/bi"
import {BsCart} from "react-icons/bs"
import {BsArrowLeftCircle} from "react-icons/bs"
import { NavbarData } from "./NavbarData.js"
import logo from '../Images/JardimgarveLogo.jpg'
import './Navbar.css'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () =>{
        setSidebar(!sidebar)
    }

    return ( 
        <> 
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <BiChevronRightCircle onClick={showSidebar} color="white"/>
                </Link>
                <Link to='/' className="menu-logo">
                    <img src={logo} alt="Logo" width="100" height="100"/>
                </Link>
                <Link to='#' className="menu-cart">
                    
                </Link>
            </div>  
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <BsArrowLeftCircle color="white"/>
                        </Link>
                    </li>
                    {NavbarData.map( (item, index) => { 
                        return(
                            <li key = {index} className={item.cName}>  
                                <Link to={item.path}>
                                    {item.icon} {item.title}
                                </Link>
                            </li>
                        )
                     })}
                </ul>
            
            </nav>
        </>
    )
}

export default Navbar

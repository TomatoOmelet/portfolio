import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="navigation">
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/About">About</Link></li>
        </ul>

    )
}

export default Navbar

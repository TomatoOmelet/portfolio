import React, {useState} from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    function useForceUpdate(){
        const [index, setIndex] = useState(1); // integer state
        return () => setIndex(index==1?2:1); // update the state to force render
    }
    const forceUpdate = useForceUpdate();

    return (
        <ul className="navigation">
            <li className={window.location.pathname==="/"?"currentPage":undefined}><NavLink to = "/" onClick={forceUpdate}>Home</NavLink></li>
            <li className={window.location.pathname==="/About"?"currentPage":undefined}><NavLink to = "/About" onClick={forceUpdate}>About</NavLink></li>
        </ul>

    )
}

export default Navbar

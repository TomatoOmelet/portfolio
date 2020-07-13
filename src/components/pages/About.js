import React from 'react'
import profile from "../../pictures/profile.png"

import Contact from "../layout/Contact"

const About = () => {
    return (
        <div className="container">
            <div className="row bg-green about">
                <div className="col-sm-2">
                <img src = {profile} alt="profile" style={{width:"75%"}}></img>    
                </div>

                <div className="col-sm-10">
                    <p>Good morning I'm Wayne, an international student who comes here from China to learn more about game and software development. 
                    I am proficient in Unity with C# and I mainly work on game projects. However, I love programming in general and is interested in 
                    learning all kinds of technologies. I was learning web development recently and just remade this portfolio with React. </p>
                </div>
            </div>
        </div>
    )
}

export default About

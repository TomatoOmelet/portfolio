import React from 'react'
import profile from "../../pictures/profile.png"

const About = () => {
    return (
        <div className="container">
            <div className="row bg-green about">
                <div className="col-sm-2">
                <img src = {profile} alt="profile" style={{width:"100%"}}/>   
                </div>

                <div className="col-sm-10" style={{padding:"0px 80px 0px 40px"}}>
                    <p>Good morning I'm Wayne, an international student who comes here from China to learn more about game and software development. 
                    I am proficient in Unity with C# and I mainly work on game projects. However, I love programming in general and is interested in 
                    learning all kinds of technologies. </p>

                    <p>After I finished my undergraduate at UC Irvine, I decided to go to UC Berkeley for a Master's Degree. I have worked on 
                    game development a lot during my undergraduate time, but have not put as much time in other areas in CS. I am also not satisfied 
                    with my soft skills. As a result I decided to take a Master's program to give myself more time to learn CS as well as develope 
                    soft skills.
                    </p>

                    <p>
                        My dream is to become an independent game developer in the future! Although I have not published any games yet, I will make 
                        interesting games in the future. I hope.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

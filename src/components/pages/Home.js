import React from 'react'
import Project from "../project/Project"

import {ChibiInu, AloneTogether, LobsterRevolution, BrokenCompass} from "../project/ProjectInfos";

const Home = () => {
    return (
        <div className="container">
            <Project head={AloneTogether.head} time={AloneTogether.time} role={AloneTogether.role} description={AloneTogether.description} 
            image={AloneTogether.image} imageDescription={AloneTogether.imageDescription}/>

            <Project head={ChibiInu.head} time={ChibiInu.time} role={ChibiInu.role} description={ChibiInu.description} 
            links={ChibiInu.links} image={ChibiInu.image} imageDescription={ChibiInu.imageDescription}/>

            <Project head={LobsterRevolution.head} time={LobsterRevolution.time} role={LobsterRevolution.role} description={LobsterRevolution.description} 
            links={LobsterRevolution.links} image={LobsterRevolution.image} imageDescription={LobsterRevolution.imageDescription}/>

            <Project head={BrokenCompass.head} time={BrokenCompass.time} role={BrokenCompass.role} description={BrokenCompass.description} 
            links={BrokenCompass.links} image={BrokenCompass.image} imageDescription={BrokenCompass.imageDescription}/>
        </div>
    )
}

export default Home

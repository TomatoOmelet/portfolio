import React from 'react'
import Project from "../project/Project"

import {ChibiInu, AloneTogether, LobsterRevolution, BrokenCompass, BoringOctopus, InterShellar,
        PaintingDemo, RileysAdventure} from "../project/ProjectInfos";

const Home = () => {
    return (
        <div className="container">
            <Project head={AloneTogether.head} time={AloneTogether.time} role={AloneTogether.role} description={AloneTogether.description} 
            image={AloneTogether.image} links={AloneTogether.links} imageDescription={AloneTogether.imageDescription}/>

            <Project head={ChibiInu.head} time={ChibiInu.time} role={ChibiInu.role} description={ChibiInu.description} 
            links={ChibiInu.links} image={ChibiInu.image} imageDescription={ChibiInu.imageDescription}/>

            <Project head={LobsterRevolution.head} time={LobsterRevolution.time} role={LobsterRevolution.role} description={LobsterRevolution.description} 
            links={LobsterRevolution.links} image={LobsterRevolution.image} imageDescription={LobsterRevolution.imageDescription}/>

            <Project head={BrokenCompass.head} time={BrokenCompass.time} role={BrokenCompass.role} description={BrokenCompass.description} 
            links={BrokenCompass.links} image={BrokenCompass.image} imageDescription={BrokenCompass.imageDescription}/>

            <Project head={PaintingDemo.head} time={PaintingDemo.time} role={PaintingDemo.role} description={PaintingDemo.description} 
            links={PaintingDemo.links} image={PaintingDemo.image} imageDescription={PaintingDemo.imageDescription}/>

            <Project head={RileysAdventure.head} time={RileysAdventure.time} role={RileysAdventure.role} description={RileysAdventure.description} 
            links={RileysAdventure.links} image={RileysAdventure.image} imageDescription={RileysAdventure.imageDescription}/>

            <Project head={InterShellar.head} time={InterShellar.time} role={InterShellar.role} description={InterShellar.description} 
            links={InterShellar.links} image={InterShellar.image} imageDescription={InterShellar.imageDescription}/>

            <Project head={BoringOctopus.head} time={BoringOctopus.time} role={BoringOctopus.role} description={BoringOctopus.description} 
            links={BoringOctopus.links} image={BoringOctopus.image} imageDescription={BoringOctopus.imageDescription}/>
        </div>
    )
}

export default Home

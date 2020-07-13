import React from 'react'
import PropTypes from "prop-types"

const Project = (props) => {
    const {head,time, role, description, linkDescription, link, githubLink, image, imageDescription} = props

    return (
        <div className="row bg-green project" style={{marginBottom:"10px"}}>
            <div className="col">
                <div className="row">
                    <h4 className="col"><strong>{head}</strong></h4>
                    <p className="col" style={{textAlign:"right"}}><strong>{time}</strong></p>
                </div>
                <p style={{lineHeight:"0px"}}><strong>{role}</strong></p>
                <p style={{whiteSpace: "pre-line"}}>{description}</p>
                {linkDescription && link && <div><a href={link} target="_blank" rel="noopener noreferrer">{linkDescription}</a><br/></div>}
                {githubLink && <a href = {githubLink} target="_blank" rel="noopener noreferrer">View it on Github</a>}
            </div>
            <div className="col">
                <img src={require('../../pictures/' + image)} alt={imageDescription} style={{verticalAlign:"middle", width:"100%"}}/>
            </div>
        </div>
    )
}

Project.propTypes = {
    head: PropTypes.string.isRequired,
    time: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string.isRequired,
    linkDescription: PropTypes.string,
    link: PropTypes.string,
    githubLink: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired
}

export default Project

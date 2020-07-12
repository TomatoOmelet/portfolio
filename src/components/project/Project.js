import React from 'react'
import PropTypes from "prop-types"

const Project = (props) => {
    const {head, description, linkDescription, link, githubLink, image, imageDescription} = props
    return (
        <div className="row bg-green project">
            <div className="col">
                <h3>{head}</h3>
                <p>{description}</p>
                {linkDescription && link && <a href={link}>{linkDescription + ":"}</a>}
                {githubLink && <a href = {githubLink}>View it on Github</a>}
            </div>
            <div className="col">
                <img src={image} alt={imageDescription}></img>
            </div>
        </div>
    )
}

Project.propTypes = {
    head: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkDescription: PropTypes.string,
    link: PropTypes.string,
    githubLink: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired
}

export default Project

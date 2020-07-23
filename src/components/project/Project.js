import React from 'react'
import PropTypes from "prop-types"

const Project = (props) => {
    const {head,time, role, description, links, image, imageDescription} = props

    return (
        <div className="row bg-green project" style={{marginBottom:"10px"}}>
            <div className="col-sm-6">
                <div className="row">
                    <h4 className="col-sm-6"><strong>{head}</strong></h4>
                    <p className="col-sm-6"><strong>{time}</strong></p>
                </div>
                <p style={{marginTop:"-10px"}}><strong>{role}</strong></p>
                <p style={{whiteSpace: "pre-line"}}>{description}</p>

                {links && links.map((value, index) => {
                    return <div key = {index}><a href={value.link} target="_blank" rel="noopener noreferrer">{value.description}</a><br/></div>
                })}
            </div>
            <div className="col-sm-6">
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
    links: PropTypes.array,
    image: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired
}

export default Project

import React from 'react'

const Contact = () => {
    return (
        <div className="container" style={{marginTop:"20px"}}>
            <p style={{lineHeight:"10px"}}><strong>Contact:</strong></p>
            <div className = "row">
                <div className="col">
                    <p style={{lineHeight:"5px"}}>weiyanz@berkeley.edu</p>
                    <p style={{lineHeight:"5px"}}>949-247-6667</p>
                </div>

                <div className="col">
                    <p style={{lineHeight:"5px"}}><a href="https://github.com/TomatoOmelet" target="_blank">Github</a></p>
                    <p style={{lineHeight:"5px"}}><a href="https://www.linkedin.com/in/weiyan-zhu/" target="_blank">LinkedIn</a></p>
                </div>
            </div>

        </div>
    )
}

export default Contact
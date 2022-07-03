import React from 'react'

export default function TitleContentLayout(props) {
    return (
        <div className="projects-section">
            <div className="projects">
                {props.children}
            </div>
            <div className="title-info">
                <div className="info">
                    <p>{props.info}</p>
                </div>
                <div className="">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

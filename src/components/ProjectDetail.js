import { Link } from 'gatsby';
import React from 'react';


export default function ProjectDetail(props) {

    const images = [];

    for (let i = 0; i < props.imageSource.length; i++) {

        if (i === 0) {
            images.push(<img id={i} key={i} className='current' src={props.imageSource[i]} alt="" />)
        } else {
            images.push(<img id={i} key={i} className='current' src={props.imageSource[i]} alt="" />)
        }
    }

    return (

        <div className="project-section" style={{ backgroundColor: props.bgcolor }}>


            <div className="controls">
                <Link className='prvs' to={props.prvsproject} >PRVS</Link>
                <Link className='close' to="/projects" >CLOSE</Link>
                <Link className='next' to={props.nextproject} >NEXT</Link>
            </div>



            <div className="details">
                <div className="current-image">
                    {props.imageSource}
                </div>



                <div className="identity">
                    <div className="name">
                        <div className='label'>
                            Name
                        </div>
                        <h3 className='value'>
                            {props.name}
                        </h3>
                    </div>
                    <div className="date">
                        <div className='label'>
                            Date
                        </div>
                        <div className='value'>
                            {props.date}
                        </div>
                    </div>
                    <div className="type">
                        <div className='label'>
                            Type
                        </div>
                        <div className='value'>
                            {props.type}
                        </div>
                    </div>
                    <div className="services">
                        <div className='label'>
                            Services
                        </div>
                        <div className='value'>
                            {props.services}
                        </div>
                    </div>
                    <p className="resume">
                        {props.resume}
                    </p>
                    <div className="visit-website">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                </div>

            </div>


        </div>
    )
}

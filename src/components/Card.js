import React from 'react'

export default function Card(props) {

    const items = [];
    for (let i = 0; i < props.tags.length; i++) {
        items.push(<p className='' key={i}>{props.tags[i]}</p>)
    }




    return (
        <div>
            <div className='card'>
                <img className='minia' src={props.minia} alt="" />
            </div>
            <div className='project-type'>
                {items}
            </div>

        </div>
    )
}

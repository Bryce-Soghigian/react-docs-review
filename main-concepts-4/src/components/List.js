import React from 'react'
import Commentcomponent from './Commentcomponent'
export default function List(props) {
    return (
        <div>
            {props.array.map(index => {
                return <Commentcomponent 

                date={index.date}
                text={index.text}
                author={index.author}/>
            })}
        </div>
    )
}

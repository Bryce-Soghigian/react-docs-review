import React from 'react'
import Avatar from './Avatar'
export default function Userinfo(props) {
    return (
        <div>
            <Avatar user={props.user}/>
            <div>
                {props.user.name}
            </div>
        </div>
    )
}

import React from 'react'
import "./contact.css"
const UserCard = ({user}) => {
    return (
        <div className="userCard">
            <img src={user.photo} alt=""/>
            <h2>{user.name}</h2>
            <p>{user.profession}</p>
        </div>
    )
}

export default UserCard

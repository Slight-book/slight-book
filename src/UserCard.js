import React from "react";

function UserCard({user}) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default UserCard;


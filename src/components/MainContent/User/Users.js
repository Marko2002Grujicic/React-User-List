import React, { useState} from "react";
import { UserList } from "./RandomUsers";
import './Users.css'

export const Users = () => {
    const [users] = useState(UserList);
    const generateUser = users.sort(() => 0.1 - Math.random()).slice(0, 9);

    return(
        <div className="container">
            {generateUser.map(user => (
            
                <div key={user.email} className="userProfile">
                    
                        <img src={user.picture.large} alt="user"/>
                        <div className="userInfo">
                            <p>Name: {user.name.first}</p>
                            <p>Email: {user.email}</p>
                            <p>Date of birth: {new Date(user.dob.date).toLocaleDateString()}</p>
                        </div>
                    
                   
                </div>
            ))}
        </div>
    )


}
import './style.css';
import React,{ useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import account from '../../services/accountService';

export const UserProfile = (props) =>{
    const navigate = useNavigate();
    const [username, setUsername] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [pass, setPass] = useState(undefined);

    useEffect(() => {
        setUsername(account.username);
        setEmail(account.email);
        setPass(account.pass);
        account.store();
    }, [account.loggedIn]);

    return(
        <div>
            <span><p>Username: </p><p>{username}</p></span>
            <span><p>Email: </p><p>{email}</p></span>
            <span><p>Password: </p><p>{pass}</p></span>
        </div>
    );
}
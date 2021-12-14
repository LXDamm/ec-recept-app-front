import './style.css';
import React,{ useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AccountContext from './AccountContext';

export const UserLogin = (props) => {
    const navigate = useNavigate();
	const [accountContext, setAccountContext] = useContext(AccountContext);
    const [userName, setUserName] = useState();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();

    const login = async (e) => {
        e.preventDefault();
        const result = await accountContext.login(mail, pass);
        if (result) {
            setAccountContext(accountContext);
            navigate('/');
            window.location.reload();
        }
    }
    const register = async (e) => {
        e.preventDefault();
        if (userName && mail && pass) {
            const result = await accountContext.register(userName, mail, pass);
            if (result) {
                setAccountContext(accountContext);
                navigate('/');
                window.location.reload();
            }
        }
    }

    return(
        <div className="user-container">
            <div className="user-main">
                <input className="member-input" type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form onSubmit={register}>
                        <label htmlFor="chk" aria-hidden="true" className="title-login">Sign up</label>
                        <input className="member-input" type="text" name="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} required/>
                        <input className="member-input" type="email" name="email" placeholder="Email" onChange={(e)=>setMail(e.target.value)} required/>
                        <input className="member-input" type="password" name="pswd" placeholder="password" onChange={(e)=>setPass(e.target.value)}/>
                        <button className="member-btn">Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={login}>
                        <label htmlFor="chk" aria-hidden="true" className="title-login"> Login </label>
                        <input className="member-input" type="email" name="email" placeholder="Email" required onChange={(e)=>setMail(e.target.value)}/>
                        <input className="member-input" type="password" name="pswd" placeholder="password" onChange={(e)=>setPass(e.target.value)} required/>
                        <button className="member-btn">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
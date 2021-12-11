import './style.css';
import React,{ useState } from "react";
import { loginAccount } from '../../services/loginService';


export const UserLogin = () =>{
    const [userName, setUserName] = useState();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();
    

    const login =(e) =>{
        e.preventDefault();
        console.log(`Email: ${mail} and password: ${pass}`)
        loginAccount(mail, pass);
    }
    const register =(e) =>{
        e.preventDefault();
        console.log(`UserName: ${userName}, Email: ${mail} and password: ${pass}`)
    }
    return(
        <div className="user-container">
            <div className="user-main">
                <input className="member-input" type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form onSubmit={register}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input className="member-input" type="text" name="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} required/>
                        <input className="member-input" type="email" name="email" placeholder="Email" onChange={(e)=>setMail(e.target.value)} required/>
                        <input className="member-input" type="password" name="pswd" placeholder="password" onChange={(e)=>setPass(e.target.value)}/>
                        <button className="member-btn">Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={login}>
                        <label htmlFor="chk" aria-hidden="true"> Login </label>
                        <input className="member-input" type="email" name="email" placeholder="Email" required onChange={(e)=>setMail(e.target.value)}/>
                        <input className="member-input" type="password" name="pswd" placeholder="password" onChange={(e)=>setPass(e.target.value)} required/>
                        <button className="member-btn">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
import './style.css';
import React,{ useState } from "react";


export const UserLogin = () =>{
    const [userName, setUserName] = useState();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();
    

    const login =(e) =>{
        e.preventDefault();
        console.log(`Email: ${mail} and password: ${pass}`)
    }
    const register =(e) =>{
        e.preventDefault();
        console.log(`UserName: ${userName}, Email: ${mail} and password: ${pass}`)
    }
    return(
        <div className="user-container">
            <div className="user-main">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form onSubmit={register}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} required/>
                        <input type="email" name="email" placeholder="Email" onChange={(e)=>setMail(e.target.value)} required/>
                        <input type="password" name="pswd" placeholder="password" onChange={(e)=>setPass(e.target.value)}/>
                        <button>Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={login}>
                        <label htmlFor="chk" aria-hidden="true"> Login </label>
                        <input type="email" name="email" placeholder="Email" required onChange={(e)=>setMail(e.target.value)}/>
                        <input type="password" name="pswd" placeholder="password" onChange={(e)=>setPass(e.target.value)} required/>
                        <button>Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
import './style.css';
export const UserLogin = () =>{
    return(
        <div className="user-container">
            <div className="user-main">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="text" placeholder="Username" required/>
                        <input type="email" name="email" placeholder="Email" required/>
                        <input type="password" name="pswd" placeholder="password"/>
                        <button>Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form action="">
                        <label for="chk" aria-hidden="true"> Login </label>
                        <input type="email" name="email" placeholder="Email" required/>
                        <input type="password" name="pswd" placeholder="password" required/>
                        <button>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
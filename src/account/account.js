import {
    loginAccount, registerAccount
} from "../services/loginService";

/**
 * Account Class
 * Used to keep state of loggedin user
 */

class Account {
    token;
    username;
    email;
    loggedIn;
    userId;
    constructor() {
        this.token = undefined;
        this.username = undefined;
        this.email = undefined;
        this.userId = undefined;
        this.loggedIn = false;
    };
    async login(email, pass) {
        const result = await loginAccount(email, pass);
        if (result) {
            this.token = result.token;
            this.email = email;
            this.username = result.username;
            this.userId = result.userId;
            this.loggedIn = true;
            this.store();
            return true;
        } else return false;
    };
    async register(username, email, pass) {
        const result = await registerAccount(username, email, pass);
        console.log(result);
        if (result) {
            this.token = result.token;
            this.email = email;
            this.username = username;
            this.userId = result.userId;
            this.loggedIn = true;
            this.store();
            return true;
        } else return false;
    }
    logout() {
        this.token = undefined;
        this.username = undefined;
        this.userId = undefined;
        this.email = undefined;
        this.loggedIn = false;
        localStorage.removeItem('account');
        return true;
    };
    store() {
        if (this.loggedIn) {
            localStorage.setItem('account', JSON.stringify({
                token: this.token,
                username: this.username,
                email: this.email,
                userId: this.userId,
                loggedIn: this.loggedIn
            }));
        }
    };
    restore() {
        const jsonString = localStorage.getItem('account');
        if (jsonString) {
            const data = JSON.parse(jsonString);
            this.token = data.token;
            this.username = data.username;
            this.userId = data.userId;
            this.email = data.email;
            this.loggedIn = data.loggedIn;
        } else {
            this.token = undefined;
            this.username = undefined;
            this.userId = undefined;
            this.email = undefined;
            this.loggedIn = false;
        }
    }
};

//const account = new Account();
//account.restore();

export default Account;
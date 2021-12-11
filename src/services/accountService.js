import {
    loginAccount
} from "./loginService";

class Account {
    token;
    username;
    email;
    loggedIn;
    constructor() {
        this.token = undefined;
        this.username = undefined;
        this.email = undefined;
        this.loggedIn = false;
    };
    async login(email, pass) {
        this.email = email;
        const result = await loginAccount(email, pass);
        if (result) {
            this.token = result.token;
            this.loggedIn = true;
            this.username = result.username;
            this.store();
            return true;
        }
    };
    logout() {
        this.token = undefined;
        this.loggedIn = false;
        return true;
    };
    store() {
        localStorage.setItem('account', JSON.stringify({
            token: this.token,
            username: this.username,
            email: this.email,
            loggedIn: this.loggedIn
        }));
    };
    restore() {
        const jsonString = localStorage.getItem('account');
        if (jsonString) {
            const data = JSON.parse(jsonString);
            this.token = data.token;
            this.username = data.username;
            this.email = data.email;
            this.loggedIn = data.loggedIn;
        } else {
            this.loggedIn = false;
        }
    }
};

const account = new Account();
account.restore();

export default account;
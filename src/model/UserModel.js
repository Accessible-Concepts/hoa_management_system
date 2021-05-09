export default class UserModel {
    #pwd;   // pwd is a private property
    constructor(plainUser) {
        this.id = plainUser.id;
        this.name = plainUser.name;
        this.apartment = plainUser.apartment;
        this.email = plainUser.email;
        this.#pwd = plainUser.pwd;
        this.role = plainUser.role
    }

    login(email, pwd) {
        return email.toLowerCase() === this.email.toLowerCase() && pwd === this.#pwd;
    }
} 
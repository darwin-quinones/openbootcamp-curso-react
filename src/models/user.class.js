import {ROLES} from './roles.enum.js'

export class User {
    username = ''
    email = ''
    password = ''
    role = ROLES.USER

    // CONSTRUCTOR
    constructor(username, email, password, role){
        this.username = username
        this.email = email
        this.password = password
        this.role = role
    }
}
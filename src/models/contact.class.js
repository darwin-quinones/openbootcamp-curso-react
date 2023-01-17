export class Contact {
    // CLASS CONTACT - ATTRIBUTES
    name = ''
    lastname = ''
    email = ''
    connected = false 

    // CONSTRUCTOR
    constructor(name, lastname, email, connected){
        this.name = name
        this.lastname = lastname
        this.email = email
        this.connected = connected
    }
}
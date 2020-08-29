export class RegUser{
    name: string;
    lastname: string;
    email: string;
    city: string;
    phoneNumber: string;   
    password: string;

    constructor(mail: string, pass:string) {
        this.email = mail;
        this.password = pass;
    }
}
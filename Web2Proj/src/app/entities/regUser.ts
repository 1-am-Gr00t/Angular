export class RegUser{
    name: string;
    lastname: string;
    email: string;
    city: string;
    phoneNumber: number;
    randomtext: string;

    constructor(name: string, lastname: string, email: string, city: string, phoneNumber: number){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.randomtext = "regUser works! :)";
    }
}
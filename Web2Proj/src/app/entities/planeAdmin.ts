export class PlaneAdmin{
    name: string;
    lastname: string;
    email: string;
    city: string;
    phoneNumber: string;

    constructor(name: string, lastname: string, email: string, city: string, phoneNumber: string){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.city = city;
        this.phoneNumber = phoneNumber;
    }
}
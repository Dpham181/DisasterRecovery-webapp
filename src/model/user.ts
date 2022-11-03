export class user {
    constructor(private email?:string , private password?:string ){}

    get _email() {
        return this.email;
    }


    get _password(){
        return this.password;
    }

}
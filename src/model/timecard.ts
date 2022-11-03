export class timecard {
    constructor(private id?:number, private code?:string, private contractor?:string, private rate?:string, private amount?:string) {}

    get _id()
    {
        return this.id;
    }

    get _hours()
    {
        return this.rate;
    }
}
export class machine {
    constructor(private id?:number, private hours?:number, private description?:string, private code?:string, private rent?:string) {}

    get _id() {
        return this.id;
    }

    get _hours() {
        return this.hours;
    }
}
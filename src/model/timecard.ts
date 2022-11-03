export class timecard {
    constructor(private id?:number, private code?:string, private contractor?:string, private hours?:number, private amount?:number, private status?:string, private timecardJob?:any[], private timecardMachine?:any[]) {}

    get _id()
    {
        return this.id;
    }

    
}
export class timecard {
    constructor(private id?:number, private code?:string, private contractor?:string, private hours?:number, private amount?:number, private status?:string, private timecardJob?:any[], private timecardMachine?:any[]) {}

    get _id()
    {
        return this.id;
    }

    get _rate()
    {
        return this.hours;
    }


    set _code(value:string){
        this.code = value;
    }
    
    set _contractor(value:any){
        this.contractor = value;
    }
    
    set _hours(value:any){
        this.hours = value;
    }
    
    set _amount(value:any){
        this.amount = value;
    }

    set _timecardJob(value:any){
        this.timecardJob= value;
    }
    set _timecardMachine(value:any){
        this.timecardMachine= value;
    }
    set _status(value:any){
        this.status = value;
    }

}
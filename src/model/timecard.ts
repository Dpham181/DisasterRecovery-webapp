export class timecard {
    constructor(private id?:number, private code?:string, private contractor?:string, private hours?:number, private amount?:number, private status?:string, private timecardJob?:any[], private timecardMachine?:any[], private date?:Date) {}

    get _id()
    {
        return this.id;
    }
    get getStatus(){
        return this.status;
    }
    get getAmount(){
        return this.amount;
    }
    get _rate()
    {
        return this.hours;
    }
    get getDate(){
        return this.date;
    }
    set setDate(value:Date){
        this.date = value;
    }
    get getcode()
    {
        return this.code;
    }

    get  getcontractor()
    {
        return this.contractor;
    }
    get gethours()
    {
        return this.hours;
    }

    get Getlistofjobs()
    {
        return this.timecardJob;
    }

    get GetlistofMachines()
    {
        return this.timecardMachine;
    }

    set _code(value:any){
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
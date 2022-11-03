export class job {

    /*
    "id": 1,
    "hours": 6.0,
    "description": "Fix The Plumbing",
    "code": "Plumber",
    "rate": 65.0
    */
   constructor(private id?:number, private hours?:number, private description?:string, private code?:string, private rate?:string) {}
   
   get _id(){
    return this.id;
   }

   get _hours(){
    return this.hours;
   }


  
}
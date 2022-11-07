export class job {

    /*
    "id": 1,
    "hours": 6.0,
    "description": "Fix The Plumbing",
    "code": "Plumber",
    "rate": 65.0
    */
   constructor(public id?:number, public hours?:number, public description?:string, public code?:string, public rate?:number) {}
   
   get _id(){
    return this.id;
   }

   get _hours(){
    return this.hours;
   }

   get _code(){
    return this.code;
   }

   get _rate(){
    return this.rate;
   }

   get _description(){
    return this.description;
   }


  
}
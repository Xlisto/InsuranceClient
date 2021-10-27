export class InsuranceType {
    public id: number | null = null;
    public untilEnginePower: number | null = null;

    constructor(   
        public enginePower: number,
        public cost: number) { }

   static createEmpty() {
       return new InsuranceType(0,0);
   }     
}
export class InsuranceCar {
    public cost: number | undefined;
    public id: number | null = null;

    constructor(
        public start: Date,
        public registrationMark: string,
        public brand: string,
        public enginePower: number,
        public clientId: number) { }

    static createEmpty() {
        return new InsuranceCar(new Date(), '', '', 0, 0);
    }
}
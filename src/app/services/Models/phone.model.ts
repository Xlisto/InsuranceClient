export class Phone {

    public phoneId: number | null = null;
    public clientId: number | null = null;

    constructor(
        public phoneNumber: string | null = ""
    ) { }
}
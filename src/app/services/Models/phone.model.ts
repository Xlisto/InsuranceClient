export class Phone {

    public phone_id: number | null = null;
    public client_id: number | null = null;

    constructor(
        public phoneNumber: string | null = ""
    ) { }
}
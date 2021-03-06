import { Phone } from "./phone.model";

export class Client {

    public clientId: number | null = null;

    constructor(

        public firstName: string,
        public lastName: string,
        public pin: string,
        public street: string,
        public houseNumber: string,
        public zip: string,
        public city: string,
        public phones: Array<any>,
        public registryNumber: string
    ) { }

    static createEmpty() {
        let client = new Client("", "", "", "", "", "", "", [], "");
        for (let i = 0; i < 3; i++) {
            client.phones.push(new Phone());
        }
        return client;
    }
}


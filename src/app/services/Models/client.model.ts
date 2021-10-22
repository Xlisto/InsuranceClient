import { Phone } from "./phone.model";

export class Client {

    public clientId: number | null = null;

    constructor(

        public firstName: string,
        public lastName: string,
        public street: string,
        public houseNumber: string,
        public registryNumber: string,
        public zip: string,
        public city: string,
        public phones: Array<any>
    ) { }

    static createEmpty() {
        let client = new Client("", "", "", "", "", "", "", []);
        for (let i = 0; i < 3; i++) {
            client.phones.push(new Phone());
        }
        return client;
    }
}


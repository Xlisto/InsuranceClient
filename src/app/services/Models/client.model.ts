import { Phone } from "./phone.model";

export class Client {

    public client_id: number | null = null;

    constructor(

        public first_name: string,
        public last_name: string,
        public street: string,
        public house_number: string,
        public registry_number: string,
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


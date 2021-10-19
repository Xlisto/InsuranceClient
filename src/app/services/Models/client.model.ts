import { Phone } from "./phone.model";

export class Client {

    constructor(
        public client_id: number,
        public first_name: string,
        public last_name: string,
        public street: string,
        public house_number: string,
        public registry_number: string,
        public zip: number,
        public city: string,
        public phones: Array<Phone>
    ) {}
}


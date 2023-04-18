import { FormControl } from "@angular/forms";

export type FormUser = {
    id:  FormControl<number>;
    name: FormControl<string>;
    lastname: FormControl<string>;
    email: FormControl<string>;
    fiscalcode: FormControl<string>;
    province: FormControl<string>;
    phone: FormControl<string>;
    age: FormControl<number>;
    country: FormControl<string>;
    login: FormControl<string>;
}
export interface Location {
    street: string;
    city: string;
    state: string;
    postcode: number;
}

export interface Login {
    uuid: string;
    username: string;
}

export interface Dob {
    date: Date;
    age: number;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface User {
    gender: string;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    phone: string;
    cell: string;
    picture: Picture;
    nat: string;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface RootObject {
    results: User[];
    info: Info;
}

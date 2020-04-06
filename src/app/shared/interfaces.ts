export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customerSince: any;
}

export interface IUser {
    _id: string,
    username: string,
    email: string,
    password: string
}
//we don't create just a user model for not keeping
//the password around on the frontend

export interface AuthData{
    email: string;
    password: string;
}
/*export type Uuid = string;
export interface User {
    uuid: Uuid,
    name: string,
    birthDate: Date
}
*/
import {Schema,model} from 'mongoose'

const usersSchema = new Schema({
    name: String,
    age: Number,
    address: String,
    email: String,
    phone: String,
    image: String,
    username: String,
    password: String
})


export const userModel= model('users', usersSchema)
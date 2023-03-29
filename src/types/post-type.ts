import {UserType} from "./user-type";

export type PostType = {
    id: number
    text: string
    time: string
    user: UserType
}
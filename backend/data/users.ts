import {IUser, User} from './types'

const users: IUser[] = []

export function addUser(user: User) {
    users.push(user)
    return user
}

export function getUser(user: User): User | void {
    return users.find((u) => {
        return u.password === user.password && u.email === user.email;
    })
}


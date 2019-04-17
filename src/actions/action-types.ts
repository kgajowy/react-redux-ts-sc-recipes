import {Action} from 'redux'
import {User} from '../users/user'

export enum ActionTypes {
    FetchUsers = 'FetchUsers',
    FetchUsersOk = 'FetchUsersOk',
    FetchUsersError = 'FetchUsersError'
}

export interface FetchUsersAction extends Action {
    type: typeof ActionTypes.FetchUsers
}

export interface FetchUsersOkAction extends Action {
    type: typeof ActionTypes.FetchUsersOk
    payload: User[]
}


export interface FetchUsersErrorAction extends Action {
    type: typeof ActionTypes.FetchUsersError
    payload: Error
}


export type UsersActions = FetchUsersAction | FetchUsersOkAction | FetchUsersErrorAction

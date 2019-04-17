import {ActionTypes, UsersActions} from '../actions/action-types'
import {User} from '../users/user'

export interface UsersState {
    users: Array<User>
    pending: boolean
    error?: Error
}

export const defaultState: UsersState = {
    users: [],
    pending: false,
}

const usersReducer = (state: UsersState = defaultState, action: UsersActions): UsersState => {
    switch (action.type) {
        case ActionTypes.FetchUsers:
            return {...state, pending: true, error: undefined}
        case ActionTypes.FetchUsersOk:
            return {...state, pending: false, users: action.payload}
        case ActionTypes.FetchUsersError:
            return {...state, pending: false, error: action.payload}
        default:
            return state
    }
}

export default usersReducer

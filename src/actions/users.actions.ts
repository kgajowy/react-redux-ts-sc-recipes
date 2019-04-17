import {ThunkDispatch} from 'redux-thunk'
import {ThunkResult} from '../interfaces/thunk'
import {RootState} from '../reducers'
import {getUsers} from '../services/users.service'
import {Recipe} from '../interfaces/recipe'
import {ActionTypes, FetchUsersErrorAction, FetchUsersOkAction, UsersActions} from './action-types'

const fetchUsersOk = (payload: Recipe[]): FetchUsersOkAction => ({
    type: ActionTypes.FetchUsersOk,
    payload
})


const fetchUsersError = (payload: Error): FetchUsersErrorAction => ({
    type: ActionTypes.FetchUsersError,
    payload
})


export const fetchUsers = (): ThunkResult<Promise<UsersActions>> => (
    (dispatch: ThunkDispatch<RootState, {}, UsersActions>) => (
        getUsers()
            .then(u => dispatch(fetchUsersOk(u)))
            .catch(error => {
                console.log(error)
                return dispatch(fetchUsersError(error))
            }))
)

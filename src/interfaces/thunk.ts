import {Action} from 'redux'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {RootState} from '../reducers'

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>;
export type AppThunkDispatch = ThunkDispatch<RootState, undefined, Action>;

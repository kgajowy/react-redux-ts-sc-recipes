import {Action} from 'redux'
import {RootState} from '../reducers'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>;
export type AppThunkDispatch = ThunkDispatch<RootState, undefined, Action>;

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/users.actions'
import {AppThunkDispatch} from '../interfaces/thunk'
import {RootState} from '../reducers'
import {User} from './user'

interface StateProps {
    users: User[]
}

interface DispatchProps {
    fetch: () => any
}

class ProvidersFilter extends Component<StateProps & DispatchProps> {

    componentDidMount(): void {
        if (!this.props.users.length) {
            this.props.fetch()
        }
    }

    // TODO pagination FaC
    // TODO fancy styling with SC
    // TODO details, extending SC
    render() {
        return this.props.users.map((u: User) => (
            <React.Fragment key={u.email}>
                User {u.email} <br/>
            </React.Fragment>
        ))
    }

}

const mapStateToProps = ({users: {users}}: RootState): StateProps => ({
    users,
})

const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
    fetch: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersFilter)

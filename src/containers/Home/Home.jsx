import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions/user';

class Home extends React.Component {
    state = {
        data: null,
    };

    componentDidMount() {
        this.props.getUsers();


        // fetch('http://localhost:4000/users')
        // .then(res => res.json())
        // .then((data) => {   
        //     this.setState({ data })
        // })
        // .catch(console.log);

        // this.callBackendAPI()
        // .then(res => this.setState({ data: res.express }))
        // .catch(err => console.log(err));
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    // callBackendAPI = async () => {
    //     const response = await fetch('/express_backend');
    //     const body = await response.json();

    //     console.log('response: ');
    //     console.log(response);
    
    //     if (response.status !== 200) {
    //       throw Error(body.message) 
    //     }
    //     return body;
    // };

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };

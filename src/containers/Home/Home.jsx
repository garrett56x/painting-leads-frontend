import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchUserLeads from '../../actions/fetchUserLeads';
import { getUserLeads, getUserLeadsError, getUserLeadsLoading } from '../../reducers/user';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUserLeads();
    }

    render() {
        const { leads, loading, error } = this.props;

        if (error) {
            return (
                <h1>Error</h1>
            );
        }

        if (loading) {
            return (
                <h1>Loading...</h1>
            );
        }

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi !</h1>
                <p>You're logged in with React!!</p>
                <p>You have {leads.length} leads.</p>
                <p>
                    <Link to="/leads">Leads</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        loading: getUserLeadsLoading(user),
        leads: getUserLeads(user),
        error: getUserLeadsError(user),
    };
}

const mapDispatchToProps = { fetchUserLeads };

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedHome as Home };

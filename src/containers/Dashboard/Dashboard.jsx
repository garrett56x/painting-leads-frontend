import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user';
import { userLeadsActions } from '../../actions/userLeads';
import { getUserName } from '../../reducers/user';
import { getUserLeads, getUserLeadsError, getUserLeadsLoading } from '../../reducers/userLeads';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUserLeads();
        this.props.fetchUserData();
    }

    render() {
        const { leads, loading, error, name } = this.props;

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
                <h1>Hi {name}!</h1>
                <p>You have {leads.length} lead{leads.length === 1 ? '' : 's'}.</p>
                <div className="leads">
                    {leads.map((lead) => (
                        <li key={lead.id}>{lead.name} | {lead.notes}</li>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, userLeads } = state;
    return {
        name: getUserName(user),
        loading: getUserLeadsLoading(userLeads),
        leads: getUserLeads(userLeads),
        error: getUserLeadsError(userLeads),
    };
}

const mapDispatchToProps = {
    fetchUserData: userActions.fetchUserData,
    fetchUserLeads: userLeadsActions.fetchUserLeads,
};

const connectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export { connectedDashboard as Dashboard };
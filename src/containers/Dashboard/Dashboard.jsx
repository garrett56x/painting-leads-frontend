import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user';
import { userLeadsActions } from '../../actions/userLeads';
import CustomMaterialTable from '../../components/CustomMaterialTable/CustomMaterialTable';
import { getUserName } from '../../reducers/user';
import { getUserLeads, getUserLeadsError, getUserLeadsLoading } from '../../reducers/userLeads';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

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
            <div className="dashboard" style={{ padding: "0 40px" }}>
                <h1>Hi {name}!</h1>
                <CustomMaterialTable
                    columns={[
                        { title: "Name", field: "name" },
                        { title: "Phone Number", field: "phone" },
                        { title: "Address", field: "address1" },
                        { title: "City", field: "city" },
                        { title: "State", field: "state" },
                        { title: "Zip Code", field: "zip" },
                        { title: "Email Address", field: "email" },
                        {
                            title: "Type",
                            field: "type1",
                            render: lead => lead.type1 === "Both" ? "Interior & Exterior" : lead.type1
                        },
                        { title: "Type 2", field: "type2" },
                        // { title: "Size", field: "size" },
                        // { title: "Stories", field: "stories", type: "numeric" },
                        // {
                        //     title: "Rooms",
                        //     field: "rooms",
                        //     type: "numeric",
                        //     render: lead => lead.rooms || "N/A" 
                        // },
                    ]}
                    data={leads}
                    title="My Leads"
                />
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

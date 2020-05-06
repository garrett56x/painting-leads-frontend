import React from 'react';
import { connect } from 'react-redux';
import { leadsActions } from '../../actions/leads';
import { userLeadsActions } from '../../actions/userLeads';
import { getLeads, getLeadsError, getLeadsLoading } from '../../reducers/leads';

class Leads extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {    
        this.props.fetchLeads();
    }

    buyLead = (id) => {
        this.props.purchaseLeads([id]);
    }

    render() {
        const { leads } = this.props;

        return (
            <div className="leads-container">
                <h1>Leads</h1>
                <div className="leads">
                    {leads.map((lead) => (
                        <li key={lead.id}>
                            {lead.name}
                            <button onClick={() => this.buyLead(lead.id)}>Buy</button>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { leads } = state;
    return {
        loading: getLeadsLoading(leads),
        leads: getLeads(leads),
        error: getLeadsError(leads),
    };
}

const mapDispatchToProps = {
    fetchLeads: leadsActions.fetchLeads,
    purchaseLeads: userLeadsActions.purchaseUserLeads,
};

const connectedLeads = connect(mapStateToProps, mapDispatchToProps)(Leads);
export { connectedLeads as Leads };
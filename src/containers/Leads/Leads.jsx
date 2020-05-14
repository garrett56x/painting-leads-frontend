import React from 'react';
import { connect } from 'react-redux';
import { leadsActions } from '../../actions/leads';
import { userLeadsActions } from '../../actions/userLeads';
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { getLeads, getLeadsError, getLeadsLoading } from '../../reducers/leads';
import './Leads.scss';

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
            <GridContainer
                spacing={3}
                className="leads-container"
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <GridItem xs={12}>
                    <h1>Shop Leads</h1>
                </GridItem>
                <GridItem xs={12} className="leads">
                    {leads.map((lead) => (
                        <li key={lead.id}>
                            {lead.name}
                            <Button color="primary" size="sm" onClick={() => this.buyLead(lead.id)}>Buy</Button>
                        </li>
                    ))}
                </GridItem>
            </GridContainer>
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
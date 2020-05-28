import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { leadsActions } from '../../actions/leads';
import { userLeadsActions } from '../../actions/userLeads';
import Button from "../../components/CustomButtons/Button.js";
import CustomMaterialTable from '../../components/CustomMaterialTable/CustomMaterialTable';
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

        leads.forEach((lead) => {
            lead.buyButton = <Button color="primary" size="sm" onClick={() => this.buyLead(lead.id)}>Buy</Button>
            const createdAt = new Date(lead.created_at);
            lead.created_at = moment(createdAt).fromNow();

            if (lead.type1 === "Both") {
                lead.type1 = "Interior & Exterior";
            }

            if (!lead.rooms) {
                lead.rooms = "N/A";
            }
        });

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
                    <CustomMaterialTable
                        columns={[
                            { title: "Type", field: "type1" },
                            { title: "Type 2", field: "type2" },
                            { title: "Size", field: "size" },
                            { title: "Stories", field: "stories", type: "numeric" },
                            { title: "Rooms", field: "rooms", type: "numeric" },
                            { title: "City", field: "city" },
                            { title: "State", field: "state" },
                            { title: "Zip Code", field: "zip" },
                            { title: "Date Requested", field: "created_at" },
                            { title: "Price ($)", field: "price", type: "numeric" },
                            { title: "Buy", field: "buyButton" }
                        ]}
                        data={leads}
                        title="Shop Leads"
                    />
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
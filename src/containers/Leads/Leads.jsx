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
                            {
                                title: "Type",
                                field: "type1",
                                render: lead => lead.type1 === "Both" ? "Interior & Exterior" : lead.type1
                            },
                            { title: "Type 2", field: "type2" },
                            { title: "Size", field: "size" },
                            { title: "Stories", field: "stories", type: "numeric" },
                            {
                                title: "Rooms",
                                field: "rooms",
                                type: "numeric",
                                render: lead => lead.rooms || "N/A" 
                            },
                            { title: "City", field: "city" },
                            { title: "State", field: "state" },
                            { title: "Zip Code", field: "zip" },
                            {
                                title: "Date Requested",
                                field: "created_at",
                                render: lead => {
                                    const createdAt = new Date(lead.created_at);
                                    const formattedCreatedAt = moment(createdAt).fromNow();
                                    return formattedCreatedAt;
                                }
                            },
                            {
                                title: "Price",
                                field: "price",
                                render: lead => lead.price === 0 ? 'Free!' : `$${lead.price}`
                            },
                            {
                                title: "Buy",
                                field: "id",
                                render: lead => <Button color="primary" size="sm" onClick={() => this.buyLead(lead.id)}>Buy</Button>
                            }
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
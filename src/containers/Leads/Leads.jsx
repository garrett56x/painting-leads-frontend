import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { leadsActions } from '../../actions/leads';
import { userLeadsActions } from '../../actions/userLeads';
import Button from "../../components/CustomButtons/Button.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomMaterialTable from '../../components/CustomMaterialTable/CustomMaterialTable';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { getLeads, getLeadsError, getLeadsLoading } from '../../reducers/leads';
import './Leads.scss';

import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

class Leads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: "",
            zips: [],
            leads: [],
        }
    }

    componentDidMount() {    
        this.props.fetchLeads();

        const zips = localStorage.getItem('userZips');
        if (zips) {
            this.setState({ zips: zips.split(",") });
        }
    }

    buyLead = (id) => {
        this.props.purchaseLeads([id]);
    }

    addZip = () => {
        let { zip, zips } = this.state;
        zips.push(zip);
        this.setState({ zips, zip: "" });
        localStorage.setItem('userZips', zips.toString());
    }

    removeZip = (zip) => {
        let { zips } = this.state;
        zips.splice(zips.indexOf(zip), 1);
        this.setState({ zips });
        localStorage.setItem('userZips', zips.toString());
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
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
                <GridItem xs={12}>
                    <h3 className="zips-header">My Zip Codes:</h3>
                    <div className="zips">
                        {this.state.zips.map((zip, i) => (
                            <Button
                                key={i}
                                color="info"
                                size="sm"
                                className="zip"
                                onClick={() => this.removeZip(zip)}
                            >
                                {zip}
                                <Close style={{ marginLeft: "10px", marginRight: "-10px" }} />
                            </Button>
                        ))}
                    </div>
                    <CustomInput
                        labelText="Add Zip Code"
                        id="zip"
                        onChange={this.handleChange}
                        value={this.state.zip}
                    />
                    <Button
                        color="primary"
                        size="sm"
                        aria-label="add zip code"
                        onClick={() => this.addZip()}
                    >
                        <Add />
                    </Button>
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
                            {
                                title: "Zip Code",
                                field: "zip",
                                defaultFilter: this.state.zips.length > 0,
                                customFilterAndSearch: (term, lead) => this.state.zips.indexOf(lead.zip) >= 0
                            },
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
                        options={{
                            filtering: true
                        }}
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
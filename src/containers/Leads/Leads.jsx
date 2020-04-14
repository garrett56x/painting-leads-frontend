import React from 'react';
import { connect } from 'react-redux';

class Leads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leads: [],
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
    
        fetch('/api/leads')
        .then(res => res.json())
        .then((data) => {   
            this.setState({ leads: data });
        })
        .catch(console.log);
    }

    render() {
        const { leads } = this.state;

        return (
            <div className="leads-container">
                <h1>Leads</h1>
                <div className="leads">
                    {leads.map((lead) => (
                        <li key={lead.id}>{lead.name}</li>
                    ))}
                </div>
            </div>
        );
    }
}

// function mapState(state) {
//     const { data } = state.data;
//     return { data };
// }

// const actionCreators = {
// }

// const connectedLeads = connect(mapState, actionCreators)(Leads);
// export { connectedLeads as Leads };
export { Leads };
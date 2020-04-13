import React from 'react';
import { connect } from 'react-redux';
import config from 'config';

class Leads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
    
        fetch(`${config.apiUrl}/leads`)
        .then(res => res.json())
        .then((data) => {   
            console.log(data);
            this.setState({ data });
        })
        .catch(console.log);
    }

    render() {
        return (
            <div>
                <h1>Leads</h1>
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
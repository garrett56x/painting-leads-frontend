import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>This is the home page</div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {};

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedHome as Home };

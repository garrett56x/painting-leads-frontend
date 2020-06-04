import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from "../../components/CustomButtons/Button.js";
import './Home.scss';

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="page-header header-filter clear-filter jss187 home-hero" data-parallax="true">
                    <div className="container">
                        <div className="title">
                            <h1>Connecting Painters and Homeowners!</h1>
                        </div>
                        <div>
                            <Button color="primary" component={Link} to="/leads">Get Started</Button>
                        </div>
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, exercitationem cupiditate adipisci aut officia quibusdam voluptates ab optio nesciunt delectus cum facilis voluptas quo nisi hic dignissimos ipsa quod quas!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, exercitationem cupiditate adipisci aut officia quibusdam voluptates ab optio nesciunt delectus cum facilis voluptas quo nisi hic dignissimos ipsa quod quas!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, exercitationem cupiditate adipisci aut officia quibusdam voluptates ab optio nesciunt delectus cum facilis voluptas quo nisi hic dignissimos ipsa quod quas!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, exercitationem cupiditate adipisci aut officia quibusdam voluptates ab optio nesciunt delectus cum facilis voluptas quo nisi hic dignissimos ipsa quod quas!
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {};

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedHome as Home };

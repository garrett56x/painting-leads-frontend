import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../containers/Home/Home';
import Test from '../../containers/Test';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
        <Route path="/" component={Home} exact />
        <Route path="/test" component={Test} />
      <Footer />
    </div>
  );
};

export default App;

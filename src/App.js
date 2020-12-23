import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;

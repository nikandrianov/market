import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchClothes } from './redux/actions/clothes';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchClothes());
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

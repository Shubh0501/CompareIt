import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import NavBar from './NavBar';
import Footer from '../containers/Footer';
import MainContent from './MainContent';

import '../styles/App.css'

const App = () => {
    return (
        <Router history={history}>
            <div className="ui container">
                <Header />
                <NavBar />
                <MainContent />
                <Footer />
            </div>
        </Router>
    );
}

export default App;

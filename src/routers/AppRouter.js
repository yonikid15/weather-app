import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// Import Pages
import Header from '../components/Header';
import UpButton from '../components/UpButton';
import DashboardPage from '../components/DashboardPage';
import DownButton from '../components/DownButton';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

// Styling
import styles from '../styles/app.css';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <main className={ styles.mainLayout }>
            <Header />
            <UpButton />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
            <DownButton />
            <Footer />
        </main>
    </Router>
);

export default AppRouter; 
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// Import Pages
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';
// Styling
import styles from '../styles/app.css';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <main className={styles.mainLayout}>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </main>
    </Router>
);

export default AppRouter; 
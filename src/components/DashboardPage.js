import React from 'react';
import { connect } from 'react-redux';
import { startAddLocation } from '../actions/locations';
import LocationList from './LocationList';
import LocationForm from './LocationForm';
import Weather from './Weather';
import styles from '../styles/DashboardPage.css';

export const DashboardPage = ( { startAddLocation } ) => {
    
    const onSubmit = ( location ) => {
        startAddLocation( location );
    }

    return (
        <section className={ styles.layout }>
            {/* Side Content */}
            <div className={styles.sideBar}>
                <LocationForm onSubmit={onSubmit} />
                <LocationList />
            </div>
            {/* Main Content */}
            <Weather />
        </section>
    );
};

const mapDispatchToProps = ( dispatch ) => ({
    startAddLocation: ( location ) => dispatch( startAddLocation( location ) )
})

export default connect( undefined, mapDispatchToProps )( DashboardPage );
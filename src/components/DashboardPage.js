import React from 'react';
import { connect } from 'react-redux';
import { startAddLocation, startActivateLocation } from '../actions/locations';
import LocationList from './LocationList';
import LocationForm from './LocationForm';
import Weather from './Weather';
import { shake } from '../tools/animations';
import styles from '../styles/DashboardPage.css';

export const DashboardPage = ( { startAddLocation, startActivateLocation, locations } ) => {
    
    const onSubmit = ( newLocation ) => {
        const ifExists = locations.find( oldLocation => oldLocation.city === newLocation.city );

        shake();

        !ifExists ? startAddLocation( newLocation ) : startActivateLocation( ifExists.id );
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

const mapStateToProps = ( state ) => ({
    locations: state.locations
});

const mapDispatchToProps = ( dispatch ) => ({
    startAddLocation: ( location ) => dispatch( startAddLocation( location ) ),
    startActivateLocation: ( id ) => dispatch( startActivateLocation( id ) )
})

export default connect( mapStateToProps, mapDispatchToProps )( DashboardPage );
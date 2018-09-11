import React from 'react';
import { connect } from 'react-redux';
import { startAddLocation, startActivateLocation } from '../actions/locations';
import LocationList from './LocationList';
import LocationForm from './LocationForm';
import Weather from './Weather';
import { shake } from '../tools/animations';
import styles from '../styles/DashboardPage.css';

export const DashboardPage = ( { startAddLocation, startActivateLocation } ) => {
    
    const onSubmit = ( location, ifExists ) => {
        if( !ifExists ) {
            startAddLocation( location );
        } else {
            startActivateLocation( ifExists.id );
            shake();
        }
    }

    return (
        <section className={ styles.layout }>
            {/* Side Content */}
            <div id="side-bar" className={styles.sideBar}>
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
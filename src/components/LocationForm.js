import React from 'react';
import { connect } from 'react-redux';
import { removeAllLocations } from '../actions/locations';
import { inputAnimation } from '../tools/animations';
import places from 'places.js';
import styles from '../styles/LocationForm.css';

export class Form extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            placesAutocomplete: undefined,
            city: undefined,
            country: undefined
        };
    };

    componentDidMount() {
        this.setState({
            placesAutocomplete: places({
                container: document.querySelector('#location-input'),
                type: 'city',
                aroundLatLngViaIP: false
            })
        }, this.setupAlgolia );
    };

    setupAlgolia = () => {
        this.state.placesAutocomplete.on( 'change', this.onChange.bind( this ));
    };

    onChange = (e) => {
        this.setState({
            city: e.suggestion.name,
            country: e.suggestion.countryCode.toUpperCase()
        }, () => { this.onSubmit() });

        this.state.placesAutocomplete.setVal('');
    };
    
    onSubmit = ( e ) => {
        e ? e.preventDefault() : undefined;
 
        if( this.state.city && this.state.country ) {
            
            const ifExists = this.props.locations.find( oldLocation =>
                oldLocation.city === this.state.city && 
                oldLocation.country === this.state.country
            );

            if ( !ifExists ) {
                const location = {
                    city: this.state.city,
                    country: this.state.country
                };
                
                this.props.onSubmit( location, ifExists );
                
            } else {
                this.props.onSubmit( location, ifExists );
            }  
        }

        inputAnimation();
    };

    removeAll = (e) => {
        e.preventDefault();
        console.log( e.target );
        this.props.removeAllLocations();
    }

    render() {
        return (
            <form className={styles.form} onSubmit={ this.onSubmit }>
                <input
                    id="location-input" 
                    className={ styles['ap-input'] }
                    type="text" 
                    name="city" 
                    placeholder="Enter a city..."
                />

                <div className={ styles.form__buttons }>
                    <button className={styles.form__addBtn}>Add Location</button>
                    <button onClick={ this.removeAll } className={styles.form__removeBtn}>Remove All</button>
                </div>
            </form>
        );
    };  
};

const mapStateToProps = ( state ) => ({
    locations: state.locations
});

const mapDispatchToProps = ( dispatch ) => ({
    removeAllLocations: () => { dispatch( removeAllLocations() ) }
});

export default connect( mapStateToProps, mapDispatchToProps )( Form );
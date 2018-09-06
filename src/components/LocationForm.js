import React from 'react';
import { connect } from 'react-redux';
import { removeAllLocations } from '../actions/locations';
import styles from '../styles/LocationForm.css';

export class Form extends React.Component {
    state = {
        city: undefined,
        country: undefined
    };

    handleCity = (e) => {
        const city = e.target.value;

        this.setState({ city }, this.handleOnChange);
    }

    handleCountry = (e) => {
        const country = e.target.value;

        this.setState({ country }, this.handleOnChange);
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const location = {
            city: this.state.city,
            country: this.state.country
        };
        
        this.props.onSubmit( location );
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
                    className={styles.form__input}
                    type="text" 
                    name="city" 
                    placeholder="City..."
                    onChange={this.handleCity}
                />
                <input
                    className={styles.form__input}
                    type="text" 
                    name="country" 
                    placeholder="Country..."
                    onChange={this.handleCountry}
                />
                <button className={styles.form__addBtn}>Add Location</button>
                <button onClick={ this.removeAll } className={styles.form__removeBtn}>Remove All</button>
            </form>
        );
    };  
};

const mapDispatchToProps = ( dispatch ) => ({
    removeAllLocations: () => { dispatch( removeAllLocations() ) }
});

export default connect( undefined, mapDispatchToProps )( Form );
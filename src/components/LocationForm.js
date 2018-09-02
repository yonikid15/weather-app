import React from 'react';
import styles from '../styles/LocationForm.css';

class Form extends React.Component {
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


    render() {
        return (
            <form className={styles.form} onSubmit={this.onSubmit}>
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
                <button className={styles.form__btn}>Add Location</button>
            </form>
        );
    };
    
};

export default Form;
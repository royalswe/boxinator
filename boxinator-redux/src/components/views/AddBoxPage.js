/**
 * TODO::find out what is considered blue color.
 */
import React from 'react';
import reactCSS from 'reactcss'
import { connect } from 'react-redux';
import { createItem } from '../../actions/actions';
import { ChromePicker } from 'react-color';

export class AddBoxPage extends React.Component {

    state = {
        name: '',
        color: {r:241, g:112, b:0}, // orange as default color
        weight: '',
        country: 'Sweden',
        displayColorPicker: false,
        displayMessage: false,
        errors: {}
    };

    handleChange = (e) => {
        /**
         * If there is any validation errors,
         * validation errors removes when it is valid
         */        
        if (!!this.state.errors[e.target.name]) {
          let errors = Object.assign({}, this.state.errors);      
          delete errors[e.target.name];
          this.setState({
            [e.target.name]: e.target.value,
            errors
          });
        } else {
          this.setState({ [e.target.name]: e.target.value });
        }
      }

    handleColorClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleColorClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleColorChange = (color) => {
        /**
         * Check if color is blue
         */
        if(color.hsv.h > 165 && color.hsv.h < 270){
            let errors = {color: "Please don't pick a blue color"};
            this.setState({errors});
        }
        else{
            // remove errors if any and set color state
            delete this.state.errors.color;
            this.setState({ color: color.rgb })
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        /**
         * custom error messages
         */
        let errors = {};
        if(this.state.name === '') errors.name = "Name can't be empty";
        if(this.state.country === '') errors.color = "Country can't be empty";
        if(this.state.weight === '') errors.weight = "Weight can't be empty";
        if(this.state.weight < 0) {
            errors.weight = "Weight can't be a negative number";
            this.setState({weight: 0});
        }
        
         /**
         * Validate form and prevent submit if is not valid
         */
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if(isValid){ // if form dont have errors then a POST request will be made
            const color = `rgb(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b})`;
            const { name, weight, country } = this.state;

            this.props.createItem({name, color, weight, country}).then(response => {
                // if box created successfully then reset the state
                this.setState({
                    name: '',
                    weight: '',
                    country: 'Sweden',
                    displayMessage: <p className="box-created-successfully">Box is succesfully created!</p>,
                    errors: {}
                });
                setTimeout(() => { // remove success message after 4 seconds
                    this.setState({displayMessage: false})
                  }, 4000);

              }).catch(errors => {
                this.setState({displayMessage: <p className="box-create-fail">{errors.message}</p>});
              });         
        }
    }

    render() {
        // styles for color picker
        const styles = reactCSS({
            'default': {
              color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgb(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b })`,
              },
              swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });

          // countries select values 
          let countryOptions = ['Sweden', 'China', 'Brazil', 'Australia'].map(country => {
            return <option key={country} value={country}>{country}</option>
          });

        return (
            <div>
                <form className="add-box" onSubmit={this.handleSubmit}>
                    <h2>Add new box</h2>
            
                    <span className="error-text">{this.state.errors.name}</span>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            id="name"
                            required
                        />
                    </div>

                    <span className="error-text">{this.state.errors.weight}</span>
                    <div>
                        <label htmlFor="weight">Weight</label>
                        <input
                            name="weight"
                            value={this.state.weight}
                            onChange={this.handleChange}
                            id="weight"
                            type="number"
                            required
                        />
                    </div>

                    <span className="error-text" >{this.state.errors.country}</span>
                    <div>
                        <label htmlFor="country">Destination Country</label>
                        <select ref="countries" name="country" value={this.state.country} onChange={this.handleChange}>
                            {countryOptions}
                        </select>
                    </div>

                    <span className="error-text">{this.state.errors.color}</span> 
                    <div>
                        <div>Box Color</div>
                        <div style={ styles.swatch } onClick={ this.handleColorClick }>
                        <div style={ styles.color } />
                        </div>
                        { this.state.displayColorPicker ? <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={ this.handleColorClose }/>
                        <ChromePicker disableAlpha color={ this.state.color } onChange={ this.handleColorChange }/>
                        </div> : null }
                    </div>

                    <div>
                        <button>Save</button>
                    </div>
                </form>

                {!!this.state.displayMessage && <div>{this.state.displayMessage}</div>}

            </div>
        )
    }
}

export default connect(null, { createItem })(AddBoxPage);
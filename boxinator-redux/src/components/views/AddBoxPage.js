/**
 * TODO:: Form and POST validation after backend validation is done
 * exports AddBoxPage class only for testing purpose
 */

import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createItem } from '../../actions/actions';

export class AddBoxPage extends React.Component {

    state = {
        name: '',
        color: '',
        weight: '',
        country: '',
        errors: {}
    };

    handleChange = (e) => {
        /**
         * If there is any validation errors,
         * validation errors disappears when isvalid
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

    handleSubmit = (e) => {
        e.preventDefault();

        /**
         * Validate form and prevent submit if is not valid
         */
        let errors = {};
        if(this.state.name === '') errors.name = "Name can't be empty";

        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if(isValid){ // if form dont have errors
            const { name, color, weight, country } = this.state;
            this.props.createItem({name, color, weight, country})
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add new box</h2>

                <div className={classnames('field', { error: !!this.state.errors.name})}>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        id="name"
                    />
                </div>
                <span>{this.state.errors.name}</span>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleChange}
                        id="weight"
                    />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input
                        name="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                        id="color"
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        name="country"
                        value={this.state.country}
                        onChange={this.handleChange}
                        id="country"
                    />
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { createItem })(AddBoxPage);
import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../ItemList';
import PropTypes from 'prop-types';
import { fetchItems } from '../../actions/actions';


export class ListItemsPage extends React.Component {
  componentDidMount(){
    this.props.fetchItems();
  }

  render() {    
    return (
      <div className="box-list">
        <h1>Box List</h1>
        <ItemList items={this.props.items} />
      </div>
    );
  }
  
}

ListItemsPage.propTypes = {
  items: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { fetchItems })(ListItemsPage);


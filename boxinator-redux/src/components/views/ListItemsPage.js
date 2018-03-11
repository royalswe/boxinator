import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../ItemList';
import PropTypes from 'prop-types';
import { fetchItems } from '../../actions/actions';


class ListItemsPage extends React.Component {
  componentDidMount(){
    this.props.fetchItems();
  }
  render() {
    console.log(this.props.items);
    
    return (
      <div>
        <h1>Box List</h1>
        <ItemList items={this.props.items} />
      </div>
    );
  }
  
}

ListItemsPage.propTypes = {
  items: PropTypes.array.isRequired,
  fetchItems: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { fetchItems })(ListItemsPage);


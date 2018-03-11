import React from 'react';
import PropTypes from 'prop-types';

export default function ItemList({ items }) {
    const emptyMessage = (
      <p>There are no boxes in collection.</p>
    );

    /**
     * Render all items for the box collection
     */
    const itemList = (
      <table>
        <tbody>
        {items.map(item => 
          <tr className="list-group" key={item.id}>
            <th>
              {item.name}
            </th>
            <th>
              {item.weight}
            </th>
            <th style={{backgroundColor: item.color}}>
              {item.color}
            </th>
            <th>
              {item.country}
            </th>
          </tr>
        )}
        </tbody>
      </table> 
    );

    return (
      <div>
        {items ? itemList : emptyMessage}
      </div>
    );
  }
  
  ItemList.propTypes = {
    items: PropTypes.array.isRequired
  }


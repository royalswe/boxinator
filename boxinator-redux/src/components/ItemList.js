import React from 'react';
import PropTypes from 'prop-types';

export default function ItemList({ items }) {
    /**
     * Renders if items collection is empty
     */
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
              {item.weight} kilograms
            </th>
            <th style={{backgroundColor: item.color}}>
            </th>
            <th>
              {item.ShippingCost} SEK
            </th>
          </tr>
        )}
          <tfoot>
            <th>
              { items.map(w => w.weight).reduce((total, weight) => total + weight, 0) }
            </th>
            <th>
              { items.map(w => w.ShippingCost).reduce((total, cost) => total + Math.round(cost), 0) }
            </th>
         </tfoot>
        </tbody>
      </table> 
    );
    
    return (
      <div>
        {items.length > 0 ? itemList : emptyMessage}
      </div>
    );
  }
  
  ItemList.propTypes = {
    items: PropTypes.array.isRequired
  }


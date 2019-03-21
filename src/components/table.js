import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    render() {
        console.log(this.props.items);

        return this.props.items.map ((items, i) => (
            <div key= {i} >
               <h1>{items.title}</h1>
                <img src={items.thumbnails.w160} alt={"kisu"} />
                <p>{items.description}</p>
                <a href="View">{items.filename}</a>
            </div>
        ));
    }
}

Table.propTypes ={
    items: PropTypes.array
};

export default Table;

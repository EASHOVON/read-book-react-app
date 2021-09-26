import React from 'react';
import './Book.css'

const Book = (props) =>
{
    let totalPage = 0;
    for (let page of props.addedBook)
    {
        totalPage += page.page;
    }

    return (
        <div>
            <h5>Total Books: {props.addedBook.length}</h5>
            <h5>Total Page Will Be Read: {totalPage}</h5>
            {
                props.addedBook.map(pd =>
                    <div
                        key={pd.unique}>
                        <div className="cart-details-container">
                            <img src={pd.img} alt="" />
                            <p>{pd.name}</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Book;
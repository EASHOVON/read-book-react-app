import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import './AllBooks.css'

const AllBooks = (props) =>
{
    // Distructuring
    const { name, author, category, img, page, price } = props.book;
    return (
        <div className="col-md-4">
            <div className="book-cart">
                <div>
                    <div className="book-image">
                        <img src={img} alt="" />
                    </div>
                    <p className="title m-1 fw-bold">{name}</p>
                </div>
                <div>
                    <p className="m-1">Author: {author}</p>
                    <p className="m-1">Category: {category}</p>
                    <p className="m-1">Page: {page}</p>
                    <p className="m-1">Pirce: {price}Tk</p>
                    <button onClick={() => props.handleAddToRead(props.book)} className="btn btn-info button"><FontAwesomeIcon icon={faBookReader} /> Add To Read</button>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;
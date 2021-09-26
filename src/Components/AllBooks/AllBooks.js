import React from 'react';
import './AllBooks.css'

const AllBooks = (props) =>
{
    console.log(props.book);
    const { name, author, category, img, page, price } = props.book;
    return (
        <div className="col-md-4">
            <div className="book-cart">
                <div className="book-image">
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className="title m-1 fw-bold">{name}</p>
                    <p className="m-1">Author: {author}</p>
                    <p className="m-1">Category: {category}</p>
                    <p className="m-1">Page: {page}</p>
                    <p className="m-1">Pirce: {price}Tk</p>
                    <button className="btn btn-info button">Add To Read</button>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;
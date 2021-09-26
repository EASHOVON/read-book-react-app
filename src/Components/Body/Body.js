import React, { useEffect, useState } from 'react';
import AllBooks from '../AllBooks/AllBooks';
import Book from '../Book/Book';
import './Body.css';

const Body = () =>
{
    const [books, setBooks] = useState([])
    useEffect(() =>
    {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setBooks(data))

    }, []);

    const [addedBook, setAddedBook] = useState([]);


    const handleAddToRead = (singleBook) =>
    {
        if (addedBook.indexOf(singleBook) === -1)
        {
            const newAddedBook = [...addedBook, singleBook];
            setAddedBook(newAddedBook);
        }

        else
        {
            alert('Already Added')
        }

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            books.map(book => (
                                <AllBooks
                                    handleAddToRead={handleAddToRead}
                                    key={book.unique}
                                    book={book}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-3">

                    <div className="side-cart d-flex justify-content-center align-items-center">
                        <Book addedBook={addedBook}></Book>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Body;
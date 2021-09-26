import React, { useEffect, useState } from 'react';
import AllBooks from '../AllBooks/AllBooks';
import './Body.css';

const Body = () =>
{
    const [books, setBooks] = useState([])
    console.log(books);
    useEffect(() =>
    {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            books.map(book => (
                                <AllBooks
                                    key={book.unique}
                                    book={book}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Body;
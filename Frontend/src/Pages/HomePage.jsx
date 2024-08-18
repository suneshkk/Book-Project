import React, { useEffect, useState } from 'react';
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import Background from '../assets/Image/Background.jpg';
import Bg1 from '../assets/Image/Bg1.jpeg';
import Logo from '../assets/Image/Logo.ico';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5000/books")
            .then((response) => {
                if (response.data) {
                    setBooks(response.data);
                } else {
                    setBooks([]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setBooks([]);
                setLoading(false);
            });
    }, []);

    const backgroundStyle2 = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };

    const backgroundStyle1 = {
        backgroundImage: `url(${Bg1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    };

    return (
        <div style={backgroundStyle1}>
            <div className="container pt-5 ">
                <div className="container d-flex justify-content-between card-body " style={backgroundStyle2}>
                    <h1 className="m-4 text- ">Book List</h1>
                    <div className=' px-4 pt-4 d-flex flex-column align-items-center'>
                        <Link to="/books/create">
                            <button style={{
                                backgroundImage: `url(${Logo})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                width: '50px',
                                height: '50px',
                                border: 'solid 2px ',

                            }}>

                            </button>

                        </Link>
                        <p>Add book</p>

                    </div>
                </div>
                {loading ? (
                    <Loading />
                ) : (
                    <table className="container table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publish Year</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.length > 0 ? (
                                books.map((book, index) => (
                                    <tr key={book._id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publishYear}</td>
                                        <td>
                                            <div className="d-flex justify-content-between fs-5 px-3">
                                                <Link className='text-success' to={`/books/details/${book._id}`}>
                                                    <BsInfoCircle />
                                                </Link>
                                                <Link to={`/books/edit/${book._id}`}>
                                                    <AiOutlineEdit />
                                                </Link>
                                                <Link className='text-danger ' to={`/books/delete/${book._id}`}>
                                                    <MdOutlineDelete />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No books available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div >
    );
};

export default HomePage;

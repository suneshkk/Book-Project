import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../component/BackButton';
import Loading from '../component/Loading';
const CreateBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .post("http://localhost:5000/books", data)
            .then(() => {
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                alert("An error happend ,all datas required ");
                console.log(error);
            });
    };
    return (
        <div className="container mt-5">

            {loading ? < Loading /> : ""}
            <div className=" row justify-content-center pt-5 ">
                <div className="card border-success col-md-6 bg-info" style={{ maxWidth: "25rem" }}>
                    <div className="card-header bg-transparent border-success">
                        <h1 className="text-center my-4">Create Book</h1>
                    </div>
                    <div className="p-4">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author</label>
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Publish Year</label>
                            <input
                                type="number"
                                value={publishYear}
                                onChange={(e) => setPublishYear(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className='d-flex  justify-content-between'>
                            <button className="btn btn-primary text-center" onClick={handleSaveBook}>
                                Save
                            </button>
                            <BackButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateBooks

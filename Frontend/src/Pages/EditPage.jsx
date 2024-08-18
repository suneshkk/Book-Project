import BackButton from "../component/BackButton";
import Loading from "../component/Loading";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://book-project-6.onrender.com/books/${id}`);
                setAuthor(response.data.author);
                setPublishYear(response.data.publishYear);
                setTitle(response.data.title);
                setLoading(false);
            } catch (error) {
                alert("An error happened. Please check the console.");
                console.log(error);

            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    const handleEditBook = async () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        try {
            await axios.put(`https://book-project-6.onrender.com/books/${id}`, data);
            navigate("/");
        } catch (error) {
            alert("An error happened, please check the console.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">

            {loading ? <Loading /> : ""}
            <div className="row justify-content-center pt-5">
                <div className="card border-success  col-md-6 bg-info" style={{ maxWidth: "30rem" }}>
                    <div className="card-header bg-transparent border-success">
                        <h1 className="text-center my-4">Edit Book</h1>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-muted">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-muted">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-muted">Publish Year</label>
                        <input
                            type="number"
                            value={publishYear}
                            onChange={(e) => setPublishYear(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="d-flex justify-content-between py-4">
                        <button className="btn btn-primary" onClick={handleEditBook}>
                            Save
                        </button>
                        <BackButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPage;

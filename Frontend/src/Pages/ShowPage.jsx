import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../component/BackButton";
import Loading from "../component/Loading";
const ShowPage = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/books/${id}`, {
                    signal: controller.signal,
                });
                setBook(response.data);
                setLoading(false);
            } catch (error) {
                if (error.name !== "CanceledError") {
                    console.error("Error fetching book:", error);
                    setLoading(false);
                }
            }
        };

        fetchBook();

        return () => {
            controller.abort();
        };
    }, [id]);

    return (
        <div className="container mt-5">

            {loading ? (
                <Loading />
            ) : (
                <div className="row justify-content-center pt-5">
                    <div className="card border-success bg-info  p-4 text-white" style={{ maxWidth: "30rem" }}>
                        <div className="card-header bg-transparent border-success">
                            <h1 className="text-center my-4">Show Book</h1>
                        </div>
                        <div className="mb-3">
                            <span className="h5 text-muted me-3">Id:</span>
                            <span>{book._id}</span>
                        </div>
                        <div className="mb-3">
                            <span className="h5 text-muted me-3">Title:</span>
                            <span>{book.title}</span>
                        </div>
                        <div className="mb-3">
                            <span className="h5 text-muted me-3">Author:</span>
                            <span>{book.author}</span>
                        </div>
                        <div className="mb-3">
                            <span className="h5 text-muted me-3">Publish Year:</span>
                            <span>{book.publishYear}</span>
                        </div>
                        <div className="mb-3">
                            <span className="h5 text-muted me-3">Create Time:</span>
                            <span>{new Date(book.createdAt).toLocaleString()}</span>
                        </div>
                        <div className="mb-3">
                            <span className="h5 text-muted me-3">Last Update Time:</span>
                            <span>{new Date(book.updatedAt).toLocaleString()}</span>
                        </div>
                        <div className="d-flex pt-4">
                            <BackButton />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowPage;

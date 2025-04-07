import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Container, Spinner, Row, Col } from "react-bootstrap";
import { themContext } from "../../Context/them";

function ProductDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const { them } = useContext(themContext);
    const isLight = them === "light";

    const bgClass = isLight ? "bg-light text-dark" : "bg-dark text-light";
    const cardClass = isLight ? "bg-dark text-light" : "bg-light text-dark";

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=c94b800b13b9b455a5d91c9b54e821a3`
                );
                setMovie(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <Container className={`text-center mt-5 min-vh-100 ${bgClass}`}>
                <Spinner animation="border" />
                <p>Loading movie details...</p>
            </Container>
        );
    }

    return (
        <Container className={`d-flex justify-content-center align-items-center flex-column  min-vh-100 ${bgClass}`}>
            <h2 className="mb-4">{movie.title}</h2>
            <Card className={`shadow ${cardClass}`} style={{ maxWidth: "800px" }}>
                <Row className="g-0">
                    <Col md={5}>
                        <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="img-fluid rounded-start"
                        />
                    </Col>
                    <Col md={7}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.overview}</Card.Text>
                            <Card.Text><strong>Release Date:</strong> {movie.release_date}</Card.Text>
                            <Card.Text><strong>Rating:</strong> {movie.vote_average}/10</Card.Text>
                            <Button className={isLight ? "btn btn-light text-dark" : "btn btn-dark text-light" } style={{marginTop:"60px"}} onClick={() => window.history.back()}>
                                Go Back
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default ProductDetails;

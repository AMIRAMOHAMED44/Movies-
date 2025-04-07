import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { themContext } from "../../Context/them";

function Search() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    
    const { them } = useContext(themContext);
    const isLight = them === "light";

    const bgClass = isLight ? "bg-light text-dark" : "bg-dark text-light";
    const cardClass = isLight ? "bg-dark text-light" : "bg-light text-dark";

    const products = useSelector((state) => state.sliceProduct.products);
    const filteredMovies = products.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Container  className={`py-4 min-vh-100 ${bgClass}`}>
            <h2 className={`text-center ${isLight ? "text-dark" : "text-light"}`}>Search Movies</h2>

            <div className="d-flex justify-content-center">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className={`form-control my-3 w-50 ${isLight ? "bg-light text-dark border-dark" : "bg-dark text-light border-light"}`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {query && (
                <Row className="g-4">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie) => (
                            <Col key={movie.id} md={4} lg={3}>
                                <Card
                                    className={`shadow ${cardClass}`} 
                                    style={{ width: "18rem", marginBottom: "20px" }}>
                                    <Card.Img
                                        variant="top"
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>Release Date: {movie.release_date}</Card.Text>
                                        <Button
                                            className={isLight ? "btn btn-light text-dark" : "btn btn-dark text-light"} 
                                            onClick={() => navigate(`/details/${movie.id}`)}>
                                            Go Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p className={`text-center mt-3 ${isLight ? "text-dark" : "text-light"}`}>No movies found.</p>
                    )}
                </Row>
            )}
        </Container>
    );
}

export default Search;









import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../Store/Slices/fav";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Favorites() {
    const favoriteMovies = useSelector((state) => state.sliceFavMovie.favMovies);
    const dispatch = useDispatch();

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-5 mt-5">My Favorite Movies</h2>
            {favoriteMovies.length === 0 ? (
                <p className="text-center mt-3">No favorite movies added yet!</p>
            ) : (
                <Row className="g-4">
                    {favoriteMovies.map((movie) => (
                        <Col key={movie.id} md={4} lg={3}>
                            <Card style={{ width: "18rem", marginBottom: "50px" }}>
                                <Card.Img
                                    variant="top"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Button
                                        variant="danger"
                                        onClick={() => dispatch(removeFromFav(movie))}
                                    >
                                            Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default Favorites;

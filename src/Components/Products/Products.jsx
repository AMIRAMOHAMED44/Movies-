import React, { useEffect, useContext } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../Store/Slices/fav";
import { FaHeart } from "react-icons/fa";
import { productAction } from "../Store/Slices/product";
import { themContext } from "../../Context/them"; 

function Products() {
    const navigate = useNavigate();
    const favMovies = useSelector((state) => state.sliceFavMovie.favMovies);
    const products = useSelector((state) => state.sliceProduct.products);
    const dispatch = useDispatch();
    
    const { them } = useContext(themContext);
    const isLight = them === "light";

    const bgClass = isLight ? "bg-light text-dark" : "bg-dark text-light";
    const cardClass = isLight ? "bg-dark text-light" : "bg-light text-dark";

    useEffect(() => {
        dispatch(productAction());
    }, [dispatch]);

    const toggleFavorite = (movie) => {
        if (favMovies.some((fav) => fav.id === movie.id)) {
            dispatch(removeFromFav(movie));
        } else {
            dispatch(addToFav(movie));
        }
    };

    return (
        <Container className={`mt-4 min-vh-100 ${bgClass}`}>
            <Row className="g-4">
                {products.map((prod) => (
                    <Col key={prod.id} md={4} lg={3}>
                        <Card 
                            className={`shadow ${cardClass}`} 
                            style={{ width: "18rem", marginBottom: "50px", marginTop: "120px", height: "38rem" }}>
                            <Card.Img
                                variant="top"
                                src={`https://image.tmdb.org/t/p/w500${prod.poster_path}`}
                                alt={prod.title}
                                style={{ marginBottom: "10px" }}
                            />
                            <Card.Body>
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>Release Date: {prod.release_date}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Button 
                                        className={isLight ? "btn btn-light text-dark" : "btn btn-dark text-light"}
                                        onClick={() => navigate(`/details/${prod.id}`)}>
                                        Go Details
                                    </Button>
                                    <FaHeart
                                        size={24}
                                        color={favMovies.some((fav) => fav.id === prod.id) ? "red" : "gray"}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => toggleFavorite(prod)}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;

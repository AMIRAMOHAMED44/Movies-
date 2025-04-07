// import About from "../About/About";
// import Header from "../Header/Header";
// import Portfolio from "../Portfolio/Portfolio";
// import Skills from "../Skills/Skills";

// function Home () {
//   return (
//     <>
//     <Header />
//       <About />
//       <Skills />
//       <Portfolio />
//     </>
//   );
// }
// export default Home


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { themContext } from "../../Context/them";

function Home() {
    const navigate = useNavigate();
    const { them } = useContext(themContext);
    const isLight = them === "light";
    
    const products = useSelector((state) => state.sliceProduct.products);
    const suggestedMovies = products.slice(0, 4); // عرض 4 أفلام عشوائية

    return (
        <Container  className={`py-5 min-vh-100 ${isLight ? "bg-light text-dark" : "bg-dark text-light"}`}>
            <div className="text-center">
                <h1>Welcome to Movie World 🎬</h1>
                <p>Discover and explore the latest movies.</p>
                <Button 
                    variant={isLight ? "dark" : "light"} 
                    className="mt-3 px-4 py-2"
                    onClick={() => navigate("/products")}
                >
                    Explore Movies
                </Button>
            </div>

            <h3 className="mt-5 text-center">Trending Movies</h3>
            <Row className="g-4 mt-3 justify-content-center">
                {suggestedMovies.map((movie) => (
                    <Col key={movie.id} md={3}>
                        <Card className={`shadow ${isLight ? "bg-dark text-light" : "bg-light text-dark"}`} style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Button 
                                    variant={isLight ? "light" : "dark"} 
                                    onClick={() => navigate(`/details/${movie.id}`)}
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;

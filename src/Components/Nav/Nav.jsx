import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart, FaMoon, FaSun, FaSearch } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Navv({ toggleTheme, theme }) {
    const favCount = useSelector((state) => state.sliceFavMovie.favMovies.length);
    const isLight = theme === "light";
    const navigate = useNavigate();  

    return (
        <>
            <Navbar bg={isLight ? "light" : "dark"} variant={theme} className="navbar-theme">
                <Container>
                    <Navbar.Brand className={isLight ? "text-dark" : "text-light"} href="#">Movies</Navbar.Brand>
                    
                    <Nav className="me-auto">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? "text-danger fw-bold" : isLight ? "text-dark" : "text-light")}
                            style={{ margin: "20px", textDecoration: "none" }}>
                            Home
                        </NavLink>
                        <NavLink 
                            to="/products" 
                            className={({ isActive }) => (isActive ? "text-danger fw-bold" : isLight ? "text-dark" : "text-light")}
                            style={{ margin: "20px", textDecoration: "none" }}>
                            Movies
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) => (isActive ? "text-danger fw-bold" : isLight ? "text-dark" : "text-light")}
                            style={{ margin: "20px", textDecoration: "none" }}>
                            Register
                        </NavLink>
                        <NavLink 
                            to="/fav" 
                            className={({ isActive }) => (isActive ? "text-danger fw-bold" : isLight ? "text-dark" : "text-light")}
                            style={{ margin: "20px", textDecoration: "none", display: "flex", alignItems: "center" }}>
                            <FaHeart color="red" size={22} />
                            <Badge bg="danger" style={{ marginLeft: "5px" }}>{favCount}</Badge>
                        </NavLink>
                    </Nav>

                    <Button 
                        variant={isLight ? "dark" : "light"} 
                        onClick={toggleTheme}
                        style={{ display: "flex", alignItems: "center", gap: "8px", marginRight: "10px" }}
                    >
                        {isLight ? <FaMoon size={20} /> : <FaSun size={20} />}
                    </Button>

                    <Button 
                        variant={isLight ? "outline-dark" : "outline-light"} 
                        onClick={() => navigate("/search")}
                        style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                        <FaSearch size={18} />
                        Search
                    </Button>

                </Container>
            </Navbar>
        </>
    );
}

export default Navv;

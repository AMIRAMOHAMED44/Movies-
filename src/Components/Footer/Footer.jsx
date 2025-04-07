import React, { useContext } from "react";
import { themContext } from "../../Context/them"; 
import "./Footer.css"

function Footer() {
    const { them } = useContext(themContext);
    const isLight = them === "light";

    return (
        <footer className={`footerText ${isLight ? "bg-dark text-light" : "bg-light text-dark"}`}>
            <p className="mb-0">&copy; Amira Mohamed</p>
        </footer>
    );
}

export default Footer;


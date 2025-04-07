// import { Provider } from "react-redux"
// import About from "./Components/About/About.jsx"
// import Footer from "./Components/Footer/Footer.jsx"
// import Header from "./Components/Header/Header.jsx"
// import Home from "./Components/Home/Home.jsx"
// import Navv from "./Components/Nav/Nav.jsx"
// import NotFound from "./Components/Notfound/Notfound.jsx"
// import Portfolio from "./Components/Portfolio/Portfolio.jsx"
// import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx"
// import Products from "./Components/Products/Products.jsx"
// import Register from "./Components/Register/Register.jsx"
// import Skills from "./Components/Skills/Skills.jsx"
// import { store } from "./Components/Store/store.js"
// import TodoApp from "./Components/ToDoList/ToDoList.jsx"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Favorites from "./Components/Favorites/Favorites.jsx"
// import { useState } from "react"
// import { ThemProvider } from "./Context/them.js"
// import Search from "./Components/Search/Search.jsx"

// function App() {
//   const [them, setThem] = useState("light");
//   const toggleTheme = () => {
//     setThem(them === "light" ? "dark" : "light");
// };
  
                

//   return (
//     <>
//       {/* <Header />
//       <About />
//       <Skills />
//       <Portfolio />
//       <Register />
//       <TodoApp />
//       <Footer /> */}
          
//           {/* <Provider store={store}>
//           <BrowserRouter>
//           <Navv />
//                 <Routes>
//                     <Route path="/" element={<Home/>} />
//                     <Route path="/products" element={<Products />} />
//                     <Route path="/details/:id" element={<ProductDetails />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/fav" element={<Favorites />} />
//                     <Route path="*" element={<NotFound />} />
//                 </Routes>
//           </BrowserRouter>
//             <Footer />
//           </Provider> */}
//       <div className={`${them == "light" ? "bg-light" : "bg-dark"}`}>
//             <ThemProvider value={{ them, setThem }}>
//                       <Provider store={store}>
//                           <BrowserRouter>
//                           <Navv  theme={them} toggleTheme={toggleTheme} />
//                                 <Routes>
//                                     <Route path="/" element={<Home/>} />
//                                     <Route path="/products" element={<Products />} />
//                                     <Route path="/details/:id" element={<ProductDetails />} />
//                                     <Route path="/register" element={<Register />} />
//                                     <Route path="/fav" element={<Favorites />} />
//                                     <Route path="/search" element={<Search />} />
//                                     <Route path="*" element={<NotFound />} />
//                                 </Routes>
//                           </BrowserRouter>
//                             <Footer />
//                           </Provider>
//               </ThemProvider>
//       </div>
                
//     </>
//   )
// }

// export default App


import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ThemProvider } from "./Context/them.js";
import { store } from "./Components/Store/store.js";
import Navv from "./Components/Nav/Nav.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import Register from "./Components/Register/Register.jsx";
import Favorites from "./Components/Favorites/Favorites.jsx";
import Search from "./Components/Search/Search.jsx";
import NotFound from "./Components/Notfound/Notfound.jsx";
import Login from "./Components/Login/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    const [them, setThem] = useState("light");

    const toggleTheme = () => {
        setThem(them === "light" ? "dark" : "light");
    };

    return (
        <ThemProvider value={{ them, setThem }}>
            <Provider store={store}>
                <BrowserRouter>
                    <div className={`${them === "light" ? "bg-light text-dark" : "bg-dark text-light"} min-vh-100`}>
                        <Navv theme={them} toggleTheme={toggleTheme} />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/details/:id" element={<ProductDetails />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/fav" element={<Favorites />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        </ThemProvider>
    );
}

export default App;

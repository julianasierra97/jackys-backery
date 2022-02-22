import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import  { createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Products from "./pages/Products";

let theme = createTheme({
    palette: {
        primary: {
            main: "#856c7e"
        },
            secondary:{
            main: "#f6dae0"
        }
    },
    typography: {
        h1: {
            fontFamily:'Dancing Script',
            fontSize: 50
        },
        h2:{
            fontFamily:'Dancing Script',
            fontSize: 20
        },
        h3:{
            fontFamily: 'Raleway',
            fontSize: 30,
            fontWeight:"bold"
        }
    },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <NavBar/>
              <div style={{height:"150px"}}/>
              <div>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/menu" element={<Menu/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="/tortas" element={<Products items ={"tortas"}/>}/>
                      <Route path="/bites" element={<Products items ={"bites"} />}/>
                      <Route path="/postres" element={<Products items ={"postres"} />}/>
                  </Routes>
              </div>
          </Router>
      </ThemeProvider>
  );
}
export default App;

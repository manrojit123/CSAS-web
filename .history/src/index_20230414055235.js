import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App() {
  return (
    <>
    <h1>Hello</h1>
    </>
    
   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
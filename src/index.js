import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
// import BlogList from './pages/BlogList';

import NoPage from "./pages/NoPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App() {
  return (
    <div>
      {/* <h1>{process.env.NODE_ENV}</h1> */}
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route exact path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="research-team" element={<Research />} />
          <Route path="our-works" element={<Works />} />
          {/* <Route path="bloglist" element={<BlogList />} /> */}
          
          <Route path='/blog/:postId' element={<BlogSinglePage/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
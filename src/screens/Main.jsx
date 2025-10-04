
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import Category from "./Category.jsx";
import Subcategory from "./SubCategory.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
    return (<div>
        <Header />
        <Sidebar />


        <Router>
            <Routes>
                <Route path="/category" element={<Category />} />
                <Route path="/subcategory" element={<Subcategory/>} />
            </Routes>
        </Router>
    </div>)
}

export default Main;
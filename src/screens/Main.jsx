
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import Category from "./Category.jsx";
import Subcategory from "./SubCategory.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableSecond from "../components/TableSecond.jsx";

function Main() {
    return (<div>

        <Router>
            <Header />
            <Sidebar />

            <div className="h-[calc(100%-95px)] w-[85%] bg-stone-300 absolute top-[13%] left-[15%]">
                <Routes>
                    <Route path="/category" element={<Category />} />
                    <Route path="/subcategory" element={<Subcategory />} />
                    <Route path="/tablesecond" element={<TableSecond />} />

                </Routes>
            </div>
        </Router>


    </div >)
}

export default Main;
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BuyPage from "./pages/BuyPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/buy" element={<BuyPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/detail" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
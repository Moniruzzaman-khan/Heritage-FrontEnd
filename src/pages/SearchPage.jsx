import SearchSection1 from "../components/Search/SearchSection1.jsx";
import NavBar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import Section5 from "../components/Buy/Section5.jsx";
import SearchSection2 from "../components/Search/SearchSection2.jsx";
import SearchSection3 from "../components/Search/SearchSection3.jsx";

const SearchPage = () => {
    return (
        <div>
            <NavBar/>
            <SearchSection1/>
            <SearchSection2/>
            <SearchSection3/>
            <Section5/>
            <Footer/>
        </div>
    );
};

export default SearchPage;
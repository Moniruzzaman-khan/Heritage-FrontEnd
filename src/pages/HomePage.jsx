import NavBar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import Landing1 from "../components/Landing/Landing1.jsx";
import Landing2 from "../components/Landing/Landing2.jsx";
import Landing4 from "../components/Landing/Landing4.jsx";
import Landing3 from "../components/Landing/Landing3.jsx";
import Landing5 from "../components/Landing/Landing5.jsx";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Landing1/>
            <Landing2/>
            <Landing3/>
            <Landing4/>
            <Landing5/>
            <Footer/>
        </div>
    );
};

export default HomePage;
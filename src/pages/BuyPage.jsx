import NavBar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import Section1 from "../components/Buy/Section1.jsx";
import Section2 from "../components/Buy/Section2.jsx";
import Section4 from "../components/Buy/Section4.jsx";
import Section3 from "../components/Buy/Section3.jsx";
import Section5 from "../components/Buy/Section5.jsx";

const BuyPage = () => {
    return (
        <div>
            <NavBar/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Footer/>
        </div>
    );
};

export default BuyPage;
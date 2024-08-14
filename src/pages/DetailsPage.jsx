import React from 'react';
import NavBar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import Landing5 from "../components/Landing/Landing5.jsx";
import DetailSection1 from "../components/Details/DetailSection1.jsx";
import DetailSection2 from "../components/Details/DetailSection2.jsx";

const DetailsPage = () => {
    return (
        <div>
            <NavBar/>
            <DetailSection1/>
            <DetailSection2/>
            <Landing5/>
            <Footer/>
        </div>
    );
};

export default DetailsPage;
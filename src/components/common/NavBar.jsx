import pic1 from '../../assets/pic1.png'
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar bg-blue-50 h-24 font-montserrat shadow-2xl">
            <div className="navbar-start ml-16">
                    <Link to="/buy" className="p-2">
                        <h1>Buy</h1>
                    </Link>
                    <Link to="/" className="p-2">
                        <h1>Sell</h1>
                    </Link>
                    <Link to="/" className="p-2">
                        <h1>Services</h1>
                    </Link>
            </div>
            <div className="navbar-center">
                <Link to="/">
                    <img className="h-20 w-14" src={pic1} alt="logo"/>
                </Link>
            </div>
            <div className="navbar-end mr-16">
                <Link to="/" className="p-2">
                    <h1>Manage Rentals</h1>
                </Link>
                <Link to="/" className="p-2">
                    <h1 className="font-bold">Sign In</h1>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
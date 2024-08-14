import pic7 from "../../assets/pic7.avif";
import pic8 from "../../assets/pic8.avif";
import {Link} from "react-router-dom";
import pic4 from "../../assets/pic4.png";
import {CiSearch} from "react-icons/ci";

const Landing3 = () => {
    return (
        <div className="hero -mt-10 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='ml-12'>
                    <span style={{ color: '#F06711' }} className="font-poppins text-lg font-bold">━━━ Property buying</span>
                    <h1 className="text-5xl font-bold font-montserrat my-4">Efficient and Transparent Home Buying Solutions</h1>
                    <p className="py-6 font-poppins text-gray-500">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <button
                        style={{ backgroundColor: '#ECF5FF', color: '#0059b1' }}
                        className="flex items-center justify-center font-montserrat rounded p-3 mt-5 text-xl font-normal"
                    >
                        <CiSearch size={30} className="mr-3" /> Find Property
                    </button>
                </div>
                <div className="relative mr-28 ">
                    <img src={pic7} alt="img" className="w-fit h-96 lg:max-w-md transform translate-x translate-y-32 rounded-xl"
                         style={{ zIndex: 0 }}
                    />
                    <img
                        src={pic8}
                        alt="img"
                        className="absolute right-0 bottom-0 w-full h-64 transform translate-x-20 -translate-y-32 rounded-xl shadow-2xl"
                        style={{ zIndex: 10 }}
                    />
                    <Link to='/'>
                        <img
                            src={pic4}
                            alt="img"
                            className="absolute right-0 bottom-0 w-20 h-20 transform -translate-x-80 -translate-y-52 rounded-xl"
                            style={{ zIndex: 10 }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing3;
import vid1 from "../../assets/vid1.mp4";
import { CiSearch } from "react-icons/ci";
import {useNavigate} from "react-router-dom";

const Landing1 = () => {

    const navigate = useNavigate();

    const handleOnClick = ()=> {
        navigate("/buy")
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center font-montserrat">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            <div className="relative z-10 text-white text-center">
                <div className="max-w-screen-md mx-auto">
                    <h1 className="mb-5 text-6xl font-bold">
                        Your Portal to India's Exquisite Real Estate
                    </h1>
                    <p className="mb-5">
                        Seamlessly connecting you to the heartbeat of India's prime properties.
                    </p>
                    <div className="flex justify-center">
                        <button onClick={handleOnClick}
                            style={{ backgroundColor: '#0059b1'}}
                            className="flex items-center justify-center text-white hover:bg-blue-700 rounded p-3 mt-5 text-xl font-normal"
                        >
                            <CiSearch size={30} className="mr-3" /> Find Property
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing1;

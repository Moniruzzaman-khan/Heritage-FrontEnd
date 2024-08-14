import {Link, useNavigate} from "react-router-dom";
import {SlArrowDownCircle} from "react-icons/sl";

const Section2 = () => {
    return (
            <div className="flex flex-row mx-20 gap-9 -mt-20">
                <div style={{backgroundColor:"#FDF0E7"}} className="card w-96 rounded-none">
                    <div className="card-body">
                        <h2 style={{color:"#D95D0F"}} className="card-title font-bold text-5xl">2k+</h2>
                        <p className="font-poppins text-gray-800">New Flat Listed</p>
                        <div style={{color:"#D95D0F"}} className="card-actions gap-28">
                            <Link to="/"><u>View all</u></Link>
                            <button
                                className="flex items-center justify-center">
                                <SlArrowDownCircle size={30} />
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"#ECF5FF"}} className="card w-96 rounded-none">
                    <div className="card-body">
                        <h2 style={{color:"#0051A1"}} className="card-title font-bold text-5xl">2k+</h2>
                        <p className="font-poppins text-gray-800">New Flat Listed</p>
                        <div style={{color:"#0051A1"}} className="card-actions gap-28">
                            <Link to="/"><u>View all</u></Link>
                            <button
                                className="flex items-center justify-center">
                                <SlArrowDownCircle size={30} />
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"#FDF0E7"}} className="card w-96 rounded-none">
                    <div className="card-body">
                        <h2 style={{color:"#D95D0F"}} className="card-title font-bold text-5xl">2k+</h2>
                        <p className="font-poppins text-gray-800">New Flat Listed</p>
                        <div style={{color:"#D95D0F"}} className="card-actions gap-28">
                            <Link to="/"><u>View all</u></Link>
                            <button
                                className="flex items-center justify-center">
                                <SlArrowDownCircle size={30} />
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"#ECF5FF"}} className="card w-96 rounded-none">
                    <div className="card-body">
                        <h2 style={{color:"#0051A1"}} className="card-title font-bold text-5xl">2k+</h2>
                        <p className="font-poppins text-gray-800">New Flat Listed</p>
                        <div style={{color:"#0051A1"}} className="card-actions gap-28">
                            <Link to="/"><u>View all</u></Link>
                            <button
                                className="flex items-center justify-center">
                                <SlArrowDownCircle size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Section2;
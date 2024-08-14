import React, { useState } from 'react';
import pic8 from "../../assets/pic7.avif";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgHomeAlt } from "react-icons/cg";
import { BiSolidDollarCircle } from "react-icons/bi";
import {useNavigate} from "react-router-dom";

const Section1 = () => {

    const navigate = useNavigate()

    const handleOnClick = ()=>{
        navigate("/search")
    }

    const [activeTab, setActiveTab] = useState('Buy');

    return (
        <div className="relative h-screen">
            <div className="hero h-1/2 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${pic8})` }}>
                <img className="w-full h-full invisible" src={pic8} alt="img" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="card bg-base-100 w-full lg:w-4/5 xl:w-3/4 mx-auto shadow-xl rounded-lg">
                    <div role="tablist" className="tabs tabs-bordered mx-4 p-6 ">
                        {['Buy', 'Rent', 'PG', 'Plot', 'Commercial'].map((tab) => (
                            <input
                                key={tab}
                                type="radio"
                                name="my_tabs_1"
                                role="tab"
                                className={`tab font-poppins text-lg text-gray-500 ${activeTab === tab ? 'text-blue-600 border-blue-600' : ''}`}
                                aria-label={tab}
                                checked={activeTab === tab}
                                onChange={() => setActiveTab(tab)}
                            />
                        ))}
                        {['Buy', 'Rent', 'PG', 'Plot', 'Commercial'].map((tab) => (
                            <div
                                key={tab}
                                role="tabpanel"
                                className={`tab-content p-6 font-poppins ${activeTab === tab ? 'block' : 'hidden'}`}
                            >
                                <div className="input input-bordered flex items-center gap-2 rounded w-full">
                                    <CiSearch size={24} className="mr-2" />
                                    <input type="text" className="grow text-sm" placeholder="Search properties" />
                                </div>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <div className="flex-1 min-w-[200px]">
                                        <p className="font-bold text-base flex items-center">
                                            <MdOutlineLocationOn size={24} className="mr-2" style={{ color: '#EE6611' }} />
                                            Your Location
                                        </p>
                                        <select style={{ backgroundColor: '#ECF5FF', color: '#EE6611' }} className="select select-bordered w-full text-sm mt-2">
                                            <option>Select Location</option>
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                        </select>
                                    </div>

                                    <div className="flex-1 min-w-[200px]">
                                        <p className="font-bold text-base flex items-center">
                                            <CgHomeAlt size={24} className="mr-2" style={{ color: '#EE6611' }} />
                                            Property Type
                                        </p>
                                        <select style={{ backgroundColor: '#ECF5FF', color: '#EE6611' }} className="select select-bordered w-full text-sm mt-2">
                                            <option>Select Property Type</option>
                                            <option>Apartment</option>
                                            <option>House</option>
                                        </select>
                                    </div>

                                    <div className="flex-1 min-w-[200px]">
                                        <p className="font-bold text-base flex items-center">
                                            <BiSolidDollarCircle size={24} className="mr-2" style={{ color: '#EE6611' }} />
                                            Budget
                                        </p>
                                        <select style={{ backgroundColor: '#ECF5FF', color: '#EE6611' }} className="select select-bordered w-full text-sm mt-2">
                                            <option>Select Budget</option>
                                            <option>0 - 50,000 BDT</option>
                                            <option>50,000 - 1,00,000 BDT</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button onClick={handleOnClick}
                                        style={{ backgroundColor: '#0059b1' }}
                                        className="flex items-center justify-center text-white hover:bg-blue-700 rounded text-lg p-2 w-full h-12 font-normal"
                                    >
                                        <CiSearch size={30} className="mr-2" /> Find Property
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;

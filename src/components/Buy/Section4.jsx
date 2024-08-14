import pic2 from "../../assets/pic2.avif"
import pic3 from "../../assets/pic3.avif"
import pic5 from "../../assets/pic5.avif"
import {FaSquareFull} from "react-icons/fa";
import {MdOutlineLocationOn} from "react-icons/md";
import React from "react";
import {BsImage} from "react-icons/bs";
const Section4 = () => {
    return (
        <div className="mt-20 mx-20">
            <div className="flex flex-row gap-96">
                <div className="mr-36 font-bold text-3xl"><h1>New Listed Properties</h1></div>
                <div style={{color:"#0059B1"}} className="ml-52 font-bold text-lg"><h1><u>See all property</u></h1></div>
            </div>
            <div className="carousel mt-6">
                <div className="flex gap-8">
                    <div style={{backgroundColor:"#F9FAFB"}} id="slide1" className="carousel-item relative flex flex-col">
                        <img className="w-96 h-52"
                             src={pic2}
                        />
                        <button style={{backgroundColor:"#FDF0E7"}} className="w-14 rounded h-7 translate-x-5 -translate-y-14 flex flex-row font-bold gap-1 mt-3"><BsImage style={{color:"#EE6611"}} size={20} className="mx-1 mt-1" />20</button>
                        <div className="flex flex-row gap-28 -mt-5 mx-6">
                            <h2 style={{backgroundColor:"#C5E2FF",color:"#00254A"}} className="rounded px-2">Apartment</h2>
                            <h2 className="font-bold flex flex-row"><FaSquareFull style={{color:"#EE6611"}} size={10} className="mr-2 mt-2"/>Ready to move</h2>
                        </div>
                        <div className="mx-6">
                            <div className="divider -mt-0.5"></div>
                            <div className="-mt-4">
                                <div className="font-bold text-xl">SunnySlope Suites</div>
                                <div className="text-gray-500 font-poppins flex flex-row"><MdOutlineLocationOn size={24} className="mr-2" style={{ color: '#EE6611' }} />Meadowshire Park, Greenfield, USA</div>
                                <div className="mt-7 font-bold text-3xl mb-5">$ 250000</div>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#F9FAFB"}} id="slide2" className="carousel-item relative flex flex-col">
                        <img className="w-96 h-52"
                             src={pic3}
                        />
                        <button style={{backgroundColor:"#FDF0E7"}} className="w-14 rounded h-7 translate-x-5 -translate-y-14 flex flex-row font-bold gap-1 mt-3"><BsImage style={{color:"#EE6611"}} size={20} className="mx-1 mt-1" />20</button>
                        <div className="flex flex-row gap-28 -mt-5 mx-6">
                            <h2 style={{backgroundColor:"#C5E2FF",color:"#00254A"}} className="rounded px-2">Apartment</h2>
                            <h2 className="font-bold flex flex-row"><FaSquareFull style={{color:"#EE6611"}} size={10} className="mr-2 mt-2"/>Ready to move</h2>
                        </div>
                        <div className="mx-6">
                            <div className="divider -mt-0.5"></div>
                            <div className="-mt-4">
                                <div className="font-bold text-xl">SunnySlope Suites</div>
                                <div className="text-gray-500 font-poppins flex flex-row"><MdOutlineLocationOn size={24} className="mr-2" style={{ color: '#EE6611' }} />Meadowshire Park, Greenfield, USA</div>
                                <div className="mt-7 font-bold text-3xl mb-5">$ 250000</div>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#F9FAFB"}} id="slide3" className="carousel-item relative flex flex-col">
                        <img className="w-96 h-52"
                             src={pic5}
                        />
                        <button style={{backgroundColor:"#FDF0E7"}} className="w-14 rounded h-7 translate-x-5 -translate-y-14 flex flex-row font-bold gap-1 mt-3"><BsImage style={{color:"#EE6611"}} size={20} className="mx-1 mt-1" />20</button>
                        <div className="flex flex-row gap-24 -mt-5 mx-6">
                            <h2 style={{backgroundColor:"#C5E2FF",color:"#00254A"}} className="rounded px-2">Apartment</h2>
                            <h2 className="font-bold flex flex-row"><FaSquareFull style={{color:"#EE6611"}} size={10} className="mr-2 mt-2"/>Ready to move</h2>
                        </div>
                        <div className="mx-6">
                            <div className="divider -mt-0.5 px-1 mr-4"></div>
                            <div className="-mt-4">
                                <div className="font-bold text-xl">SunnySlope Suites</div>
                                <div className="text-gray-500 font-poppins flex flex-row"><MdOutlineLocationOn size={24} className="mr-2" style={{ color: '#EE6611' }} />Meadowshire Park, Greenfield, USA</div>
                                <div className="mt-7 font-bold text-3xl mb-5">$ 250000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 right-28 flex justify-between translate-x-14 translate-y-20 transform">
                    <a style={{backgroundColor:'#5490CB'}} className="btn btn-circle text-white">❮</a>
                    <a style={{backgroundColor:'#5490CB'}} className="btn btn-circle text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Section4;

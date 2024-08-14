import React from 'react';
import {
    FaBuilding, FaCar,
    FaCheckCircle, FaChild,
    FaDumbbell, FaGasPump,
    FaHome,
    FaParking, FaPhone, FaPlay,
    FaPowerOff, FaRunning,
    FaShieldAlt, FaSoap, FaTableTennis, FaTrash,
    FaTree, FaTruckLoading, FaTv,
    FaWarehouse, FaWater, FaWifi, FaWrench
} from "react-icons/fa";

const DetailSection2 = () => {

    const amenities = [
        { name: 'Power Back Up', icon: <FaPowerOff /> },
        { name: 'Lift', icon: <FaBuilding /> },
        { name: 'Club House', icon: <FaWarehouse /> },
        { name: 'Gymnasium', icon: <FaDumbbell /> },
        { name: 'Park', icon: <FaTree /> },
        { name: 'Reserved Parking', icon: <FaParking /> },
        { name: 'Security', icon: <FaShieldAlt /> },
        { name: 'Water Storage', icon: <FaWater /> },
        { name: 'Private Terrace/Garden', icon: <FaHome /> },
        { name: 'Vaastu Compliant', icon: <FaCheckCircle /> },
        { name: 'Service/Goods Lift', icon: <FaTruckLoading /> },
        { name: 'Visitor Parking', icon: <FaCar /> },
        { name: 'Intercom Facility', icon: <FaPhone /> },
        { name: 'Maintenance Staff', icon: <FaWrench /> },
        { name: 'Waste Disposal', icon: <FaTrash /> },
        { name: 'Laundry Service', icon: <FaSoap /> },
        { name: 'Internet/Wi-Fi Connectivity', icon: <FaWifi /> },
        { name: 'DTH Television Facility', icon: <FaTv /> },
        { name: 'Piped Gas', icon: <FaGasPump /> },
        { name: 'Jogging and Strolling Track', icon: <FaRunning /> },
        { name: 'Outdoor Tennis Courts', icon: <FaTableTennis /> },
        { name: 'Early Learning Centre', icon: <FaChild /> },
        { name: 'Kids Play Area', icon: <FaPlay /> },
    ];

    return (
        <div className="mx-14 mt-10 bg-white shadow-lg rounded-lg border-2">
            <h2 className="text-2xl mx-5 font-bold mb-8">Amenities</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-16 mx-8 px-5">
                {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <span className="text-lg text-gray-600">{amenity.icon}</span>
                        <span className="text-sm text-gray-800">{amenity.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailSection2;
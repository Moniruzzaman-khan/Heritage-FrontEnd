import {FaBath, FaBed, FaBuilding, FaCalendarAlt, FaCompass, FaRulerCombined} from "react-icons/fa";
import pic2 from "../../assets/pic2.avif"
import pic3 from "../../assets/pic3.avif"
import pic5 from "../../assets/pic5.avif"
import pic6 from "../../assets/pic6.avif"

const DetailSection1 = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <h2 className="text-xl font-bold text-gray-800">
                        3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
                    </h2>
                    <p className="text-lg font-semibold text-blue-600">$300K</p>
                    <p className="text-sm text-gray-500 mb-4">Meadowswithe Park, Greenfield, USA</p>
                    <img
                        src={pic2}
                        alt="Property"
                        className="w-full rounded-lg"
                    />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <img
                            src={pic3}
                            alt="Thumbnail"
                            className="w-full rounded-lg"
                        />
                        <img
                            src={pic5}
                            alt="Thumbnail"
                            className="w-full rounded-lg"
                        />
                        <div className="relative">
                            <img
                                src={pic6}
                                alt="Thumbnail"
                                className="w-full rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                <span className="text-white font-bold">View more</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold">Overview</h3>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="flex items-center">
                                <FaBed className="text-blue-600 mr-2" />
                                <p>2 Beds</p>
                            </div>
                            <div className="flex items-center">
                                <FaBath className="text-blue-600 mr-2" />
                                <p>2 Bath</p>
                            </div>
                            <div className="flex items-center">
                                <FaBuilding className="text-blue-600 mr-2" />
                                <p>2 Balcony</p>
                            </div>
                            <div className="flex items-center">
                                <FaRulerCombined className="text-blue-600 mr-2" />
                                <p>Carpet Area: 2000 sqft</p>
                            </div>
                            <div className="flex items-center">
                                <FaCompass className="text-blue-600 mr-2" />
                                <p>Facing: North - East</p>
                            </div>
                            <div className="flex items-center">
                                <FaCalendarAlt className="text-blue-600 mr-2" />
                                <p>Age of Construction: New</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:col-span-1 bg-white p-4 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800">Property Value</h3>
                    <p className="text-lg font-bold text-blue-600">$300k - $310k</p>
                    <p className="text-sm text-gray-500">
                        Your bid can not be more than 10% of the property Minimum value.
                    </p>

                    <div className="mt-4">
                        <label className="text-sm font-medium text-gray-700">Min</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            placeholder="$ 290k"
                        />

                        <label className="text-sm font-medium text-gray-700 mt-4">Max</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            placeholder="$ 305k"
                        />

                        <div className="mt-4">
                            <input type="range" className="w-full" min="300" max="310" />
                        </div>

                        <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4">
                            Bid Property
                        </button>
                    </div>

                    <div className="mt-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbAXVlI7mtq8W5A1lbii7Vzj-kKmFJAyZzA&usqp=CAU"
                            alt="Map"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailSection1;
const Section5 = () => {
    return (
        <div className="mt-16 mb-28">
            <h2 className="text-center text-black font-bold text-5xl font-montserrat">Testimonials</h2>
            <div className="flex flex-row mx-20 gap-8 mt-16">
                <div style={{backgroundColor:"#ECF5FF"}} className="text-center">
                    <div className="mt-10 mb-10">
                        <div className="rating space-x-2 mb-5">
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                        </div>
                        <div className="font-poppins text-gray-400 mx-10 text-lg">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</div>
                        <div className="avatar">
                            <div className="w-12 mt-10 rounded-full">
                                <img src="data:image/jpeg;base64,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" />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-montserrat font-bold text-xl">Tony Stark</h2>
                            <h2 className="font-poppins text-gray-500">Marketing manager, XYZ</h2>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"#ECF5FF"}} className="text-center">
                    <div className="mt-10 mb-10">
                        <div className="rating space-x-2 mb-5">
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                        </div>
                        <div className="font-poppins text-gray-400 mx-10 text-lg">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</div>
                        <div className="avatar">
                            <div className="w-12 mt-10 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToXWJp2H1lsvWM7thl5iMbpSwVbajUBQsuA&usqp=CAU" />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-montserrat font-bold text-xl">Tony Stark</h2>
                            <h2 className="font-poppins text-gray-500">Marketing manager, XYZ</h2>
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex space-x-2 mt-14 left-96 absolute translate-x-64">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-100"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-100"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-100"></div>
                </div>
        </div>
    );
};

export default Section5;
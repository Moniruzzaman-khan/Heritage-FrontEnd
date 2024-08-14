import pic9 from "../../assets/pic9.png"
const Landing5 = () => {
    return (
        <div className="mt-32 content-center justify-center justify-items-center">
            <h1 className='text-center font-montserrat font-bold text-5xl'>Other Services</h1>
            <div className='mt-16 flex gap-8 mx-24'>
                <div style={{ backgroundColor: '#ECF5FF' }} className="card lg:card-side rounded">
                    <div className="mt-7 ml-5">
                        <img
                            className="w-36 h-16"
                            src={pic9}
                            alt="Album" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-montserrat font-bold text-2xl">Advanced Property Search</h2>
                        <p className="font-poppins text-gray-500">Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#ECF5FF' }} className="card lg:card-side rounded">
                    <div className="mt-7 ml-5">
                        <img
                            className="w-36 h-16"
                            src={pic9}
                            alt="Album" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-montserrat font-bold text-2xl">Virtual Tours and Multimedia</h2>
                        <p className="font-poppins text-gray-500">Explore properties through immersive virtual tours and HD photos.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#ECF5FF' }} className="card lg:card-side rounded">
                    <div className="mt-7 ml-5">
                        <img
                            className="w-36 h-16"
                            src={pic9}
                            alt="Album" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-montserrat font-bold text-2xl">Secure Online Transactions</h2>
                        <p className="font-poppins text-gray-500">Ensure secure transactions and e-sign documents seamlessly online.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing5;
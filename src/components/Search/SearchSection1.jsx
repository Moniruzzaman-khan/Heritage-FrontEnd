import React from 'react';

const SearchSection1 = () => {
    return (
        <div className="mt-16 mx-20">
            <div className="flex flex-row gap-10 text-center">
                <div style={{backgroundColor:"#0059B1"}} className="text-white w-44 h-10 rounded">
                    <h2 className="mt-1 text-lg">properties (400)</h2>
                </div>
                <div style={{backgroundColor:"#ECF5FF"}} className="text-gray-500 w-44 h-10 rounded">
                    <h2 className="mt-1 text-lg">New Projects (400)</h2>
                </div>
                <div style={{backgroundColor:"#ECF5FF"}} className="text-gray-500 w-44 h-10 rounded">
                    <h2 className="mt-1 text-lg">Pre-launch offers</h2>
                </div>
            </div>
            <div className="divider mt-2 mx-44 -translate-x-44"></div>
            <div className="font-bold text-2xl text-black">400 results for rental</div>
        </div>
    );
};

export default SearchSection1;
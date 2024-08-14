import React from "react";

const SearchSection3 = () => {
    return (
        <div>
            <div className="divider w-2/3 ml-20"></div>
            <div className="join px-20">
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
            </div>

            <div className="mt-20">
                <div className="card mx-32 flex flex-row">
                    <div className="w-80">
                        <h2 className="font-bold text-2xl">Need a Home Loan</h2>
                        <h2>Select How Much Home Loan You Can Take</h2>
                    </div>
                    <div className="flex w-full mx-10 flex-col">
                        <input type="range" min={0} max="100" value="25" className="range" step="25" />
                        <div className="flex w-full justify-between px-2 text-xs">
                            <span>$20K</span>
                            <span>$30K</span>
                            <span>$40K</span>
                            <span>$50K</span>
                            <span>$60K+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection3;
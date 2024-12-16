
const Features = () => {
    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-center text-xl font-bold mb-6">
                Empowering women to travel with confidence and ease worldwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                {/* Affordable Housing */}
                <div
                    className="bg-white rounded-lg shadow-md p-16 flex items-center relative"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 55%, 85% 100%, 0% 100%)", // Adjust as per the cut
                    }}
                >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Affordable Housing</h3>
                        <p className="text-sm text-gray-600">
                            Save money and travel smarter by sharing accommodations with fellow members.
                        </p>
                    </div>
                </div>
                <div
                    className="bg-white rounded-lg  shadow-md p-16 flex items-center relative"
                    style={{
                        // clipPath: "polygon(0 0, 100% 0, 100% 15%, 15% 100%, 0% 100%)"
                        // Adjust as per the cut
                        clipPath: "polygon(100% 0, 98% 99%, 15% 98%, 0% 55%, 0% 0)"
                    }}
                >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Affordable Housing</h3>
                        <p className="text-sm text-gray-600">
                            Save money and travel smarter by sharing accommodations with fellow members.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-10  md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                {/* Affordable Housing */}
                <div
                    className="bg-white rounded-lg shadow-md p-16 flex items-center relative"
                    style={{
                        clipPath: "polygon(85% 0, 100% 55%, 100% 99%, 0 100%, 0 0)",
                    }}
                >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Affordable Housing</h3>
                        <p className="text-sm text-gray-600">
                            Save money and travel smarter by sharing accommodations with fellow members.
                        </p>
                    </div>
                </div>
                <div
                    className="bg-white rounded-lg shadow-md p-16 flex items-center relative"
                    style={{
                        clipPath: "polygon(15% 0px, 100% 0px, 100% 99%, 0px 100%, 0px 55%)",
                    }}
                >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Affordable Housing</h3>
                        <p className="text-sm text-gray-600">
                            Save money and travel smarter by sharing accommodations with fellow members.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;

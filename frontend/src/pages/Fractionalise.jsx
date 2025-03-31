import React from "react";
const Fractionalise = () => {
    const [tokenName, setTokenName] = React.useState("");

    return (
        <div className="flex justify-center h-screen ">
            <div className="h-full flex flex-col justify-center">
                <div className=" h-min text-white max-w-md p-4 space-y-8 w-96 bg-[#0D1321] shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 ">
                        <h2 className="text-3xl font-bold text-center">Fractionalise FD Token</h2>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="tokenName" className="block text-xl font-medium text-white">
                                Enter the Name of the token
                            </label>
                            <input
                                type="text"
                                id="tokenName"
                                value={tokenName}
                                onChange={(e) => setTokenName(e.target.value)}
                                className="p-2 mt-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 lg:text-lg"
                                placeholder="Keep A Unique Name For your Token"
                            />
                        </div>
                        <div className="max-w-md mx-auto">
                            <label className="text-base text-white font-medium mb-3 block">Upload file</label>
                            <input
                                type="file"
                                className="w-full text-white font-medium text-md bg-[#0D1321] border-2 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-purple-500 file:hover:bg-gray-200 file:text-white rounded"
                            />
                            <p className="text-xs text-white mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                        </div>
                        <div>
                            <label htmlFor="volume" className="block text-xl font-medium text-white">
                                Enter Volume of the Token
                            </label>
                            <input
                                type="number"
                                id="volume"
                                className="p-2 mt-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 lg:text-lg"
                                placeholder="Enter Volume of tokens"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Mint Tokens
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Fractionalise;
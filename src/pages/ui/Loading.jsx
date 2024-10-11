import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
            <div className="w-16 h-16 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <h2 className="mt-4 text-lg text-gray-700">Loading...</h2>
        </div>
    );
};

export default Loading;

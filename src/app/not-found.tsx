import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md p-8 bg-white rounded shadow">
                <h1 className="text-4xl font-bold mb-4">Oops!</h1>
                <p className="text-gray-600 mb-8">Something went wrong.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
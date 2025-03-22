import React from "react";

export const Card = ({ children }) => {
    return (
        <div className="mb-6 shadow-lg bg-white rounded-2xl p-6 transition-transform transform hover:scale-105">
            {children}
        </div>
    );
};

export const CardContent = ({ children }) => {
    return (
        <div className="mt-2 text-gray-700">
            {children}
        </div>
    );
};

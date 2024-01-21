// src/components/PinDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PinDetails = ({ match }) => {
    const { pinId } = useParams();

    return (
        <div>
            <h2>Pin Details</h2>
            <p>Pin ID: {pinId}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default PinDetails;

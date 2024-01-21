// src/components/PinDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PinDetails = () => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    const { pinId } = useParams();

    useEffect(() => {
        // Fetch location details when the component mounts
        const fetchLocationDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/location/${pinId}`);
                const data = await response.json();

                // Update state with the fetched location details
                setLocation(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching location details:', error);
                setLoading(false);
            }
        };

        fetchLocationDetails();
    }, [pinId]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {location && location.location && (
                <h2>{location.location.name}</h2>
            )}
            {location && location.image && (
                <img src={"/" + location.image} />
            )}
            {!loading && !location && <p>Location not found.</p>}
        </div>
    );
};

export default PinDetails;

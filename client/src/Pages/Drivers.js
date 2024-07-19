import React, { useState, useEffect } from 'react';

function Drivers() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('/api/drivers')
            .then(response => response.json())
            .then(data => setDrivers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Formula 1 Drivers</h1>
            <ul>
                {drivers.map(driver => (
                    <li key={driver.driverId}>{driver.givenName} {driver.familyName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Drivers;

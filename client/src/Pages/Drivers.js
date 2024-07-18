import React, { useState, useEffect } from 'react';

function Drivers() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('/api/drivers')  // Dohvaćanje podataka s ruta definiranom u Flask aplikaciji
            .then(response => response.json())
            .then(data => setDrivers(data))
            .catch(error => console.error('Error fetching drivers:', error));
    }, []);

    return (
        <div>
            <h2>Formula 1 Drivers</h2>
            <ul>
                {drivers.map(driver => (
                    <li key={driver.driverId}>{driver.givenName} {driver.familyName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Drivers;

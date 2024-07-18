import React, { useEffect, useState } from 'react';

function App() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/drivers')
            .then(response => response.json())
            .then(data => setDrivers(data));
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

export default App;

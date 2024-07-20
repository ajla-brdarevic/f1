import React, { useState, useEffect } from 'react';
import './Drivers.css';

function Drivers() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/drivers')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Proverite podatke ovde
                setDrivers(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div>
            <h1>Formula 1 Drivers</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Given Name</th>
                        <th>Family Name</th>
                        <th>Date of Birth</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map(driver => (
                        <tr key={driver.driverId}>
                            <td>{driver.code}</td>
                            <td>{driver.givenName}</td>
                            <td>{driver.familyName}</td>
                            <td>{driver.dateOfBirth}</td>
                            <td>{driver.nationality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Drivers;

import React, { useState, useEffect } from 'react';
import './Drivers.css';
import Navbar from './Navbar';

function Drivers() {
    const [drivers, setDrivers] = useState([]);
    const [currentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        fetch('http://localhost:5000/api/drivers')
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setDrivers(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div>
            <Navbar />
            <h1>Formula 1 Drivers {currentYear} Season</h1>
            <table className='driversTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Driver</th>
                        <th>Date of Birth</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map(driver => (
                        <tr key={driver.driverId}>
                            <td>{driver.code}</td>
                            <a href={driver.url} target="_blank" rel="noopener noreferrer">
                                {driver.givenName} {driver.familyName}
                            </a>
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

// src/Circuits.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Circuits.css';

function Circuits() {
    const [circuits, setCircuits] = useState([]);
    const [currentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        fetch('http://localhost:5000/api/circuits')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCircuits(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Formula 1 Circuits {currentYear} Season</h1>
            <table className='circuitTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {circuits.map(circuit => (
                        <tr key={circuit.circuitId}>
                            <td>
                                <a href={circuit.url} target="_blank" rel="noopener noreferrer">
                                    {circuit.circuitName}
                                </a>
                            </td>
                            <td>{circuit.Location.locality}, <i>{circuit.Location.country}</i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Circuits;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Circuits.css';

function Circuits() {
    const [circuits, setCircuits] = useState([]);

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
            <h1>Formula 1 Circuits</h1>
            <table className='circuitTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Country</th>
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
                            <td>{circuit.Location.locality}</td>
                            <td>{circuit.Location.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Circuits;

import React, { useState } from 'react';

import axios from 'axios';
import { createVilla } from '../data/serviceData';
import './formAdd.css';
const CreateHouse = () => {
    const [house, setHouse] = useState('');
    const [usableArea, setUsableArea] = useState('');
    const [costs, setCosts] = useState('');
    const [maxPeople, setMaxPeople] = useState('');
    const [type, setType] = useState('');
    const [standard, setStandard] = useState('');
    const [description, setDescription] = useState('');
    const [pool, setPool] = useState('');
    const [floor, setFloor] = useState('');
    const [free, setFree] = useState('');
    const handleAddVillaSubmit = async () => {
        await createVilla({ house, usableArea, costs, maxPeople, type, standard, description, pool, floor, free })
            .then(response => {
                alert('Create success');
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <div className='form-container'>
            <h1>Create a new Villa</h1>
            <form onSubmit={handleAddVillaSubmit}>
                <label>
                    House:
                    <input type="text" value={house} onChange={(event) => setHouse(event.target.value)} />
                </label>
                <label>
                    Usable area:
                    <input type="text" value={usableArea} onChange={(event) => setUsableArea(event.target.value)} />
                </label>
                <label>
                    Costs:
                    <input type="text" value={costs} onChange={(event) => setCosts(event.target.value)} />
                </label>
                <label>
                    Max people:
                    <input type="text" value={maxPeople} onChange={(event) => setMaxPeople(event.target.value)} />
                </label>
                <label>
                    Type:
                    <input type="text" value={type} onChange={(event) => setType(event.target.value)} />
                </label>
                <label>
                    Standard:
                    <input type="text" value={standard} onChange={(event) => setStandard(event.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                </label>
                <label>
                    Pool:
                    <input type="text" value={pool} onChange={(event) => setPool(event.target.value)} />
                </label>
                <label>
                    floor:
                    <input type="text" value={floor} onChange={(event) => setFloor(event.target.value)} />
                </label>
                <label>
                    Free:
                    <input type="text" value={free} onChange={(event) => setFree(event.target.value)} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};
export default CreateHouse;
import axios from "axios";

export async function getListVilla() {
    const res = await axios.get('http://localhost:8080/villas');
    return res.data;
};
export async function getListRooms() {
    const res = await axios.get('http://localhost:8080/rooms');
    return res.data;
};
export async function getListHouses() {
    const res = await axios.get('http://localhost:8080/houses');
    return res.data;
};

export async function createVilla(villa) {
    await axios.post('http://localhost:8080/villas', villa);
}
export async function createRoom(room) {
    await axios.post('http://localhost:8080/rooms', room);
}
export async function createHouse(house) {
    await axios.post('http://localhost:8080/houses', house);
}
export async function getListType() {
    const res = await axios.get('http://localhost:8080/types');
    return res.data;
}
export async function findById(id) {
    const res = await axios.get(`http://localhost:8080/types/${id}`)
    return res.data
}
export async function deleteVilla(id) {
    const res = await axios.delete(`http://localhost:8080/villas/${id}`)
    return res.data
}


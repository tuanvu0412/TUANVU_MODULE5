import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "./bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/mainpage/header';
import Main from './component/mainpage/main';
import Service from './component/serviceOfHotel/villaList';
import Footer from './component/mainpage/footer';
import Customer from './component/customer/customerList';
import Contract from './component/contract/contractList';
import CreateVilla from './component/serviceOfHotel/createVilla';
import CreateContract from './component/contract/createContract';
import CreateRoom from './component/serviceOfHotel/createRoom';
import Room from './component/serviceOfHotel/roomList';
import House from './component/serviceOfHotel/houseList';
import CreateHouse from './component/serviceOfHotel/createHouse';
import CreateCustomer from './component/customer/createCustomer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Main></Main>} />
            <Route path='/service' element={<Service></Service>} />
            <Route path='/room' element={<Room></Room>}></Route>
            <Route path='/house' element={<House></House>}></Route>
            <Route path='/villas/villa' element={<CreateVilla></CreateVilla>}></Route>
            <Route path='/house/house' element={<CreateHouse></CreateHouse>}></Route>
            <Route path='/rooms/room' element={<CreateRoom></CreateRoom>}></Route>
            <Route path='/customers/customer' element={<CreateCustomer></CreateCustomer>}></Route>
            <Route path='/contracts/addContract' element={<CreateContract></CreateContract>}></Route>
            <Route path='/customer' element={<Customer></Customer>} />
            <Route path='/contract' element={<Contract></Contract>} />
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

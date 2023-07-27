import { createContract } from "../data/contractData";
import { useEffect, useState } from "react";
import { getListCustomer } from "../data/customerData";
import { getListService } from "../data/serviceData";
import '../serviceOfHotel/formAdd.css';
const CreateContract = () => {
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [customers, setCustomers] = useState([]);
    const [services, setServices] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [deposit, setDeposit] = useState('');

    const handleAddContractSubmit = async () => {
        await createContract({ services, customers, startDate, endDate, deposit })
            .then(response => {
                alert('Create success');
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        getCustomer();
        getService();
    }, [])

    const getCustomer = async () => {
        const data = await getListCustomer();
        setCustomers(data);
    }

    const getService = async () => {
        const data = await getListService();
        setServices(data);
    }
    return (
        <div className='form-container'>
            <h1>Create a new Contract</h1>
            <form onSubmit={handleAddContractSubmit}>
                <label>
                    Customers:
                    <select value={selectedCustomer} onChange={(event) => setSelectedCustomer(event.target.value)}>
                        {Array.isArray(customers) && customers.map(customer => (
                            <option key={customer.id} value={customer.id}>{customer.name},{customer.phone_number},{customer.email}</option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Services:
                    <select value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
                        {Array.isArray(services) && services.map(service => (
                            <option key={service.id} value={service.id}>{service.service},{service.costs},{service.quantity}</option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                </label>
                <br />
                <label>
                    End Date:
                    <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                </label>
                <br />
                <label>
                    Deposit:
                    <input type="number" value={deposit} onChange={(event) => setDeposit(parseInt(event.target.value))} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateContract;

{/* <div>
    <select forHtml="customer">
        {customers.map(customer => (
            <option key value={customer}>{customer.name}</option>
        ))};
    </select>
</div> */}
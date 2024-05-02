import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('service book successfully')
                }
            })
    }


    return (
        <div>
            <h2 className="text-center text-3xl text-[#FF3811] font-bold">Book service: {title}</h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
    const { title, price, img } = service;
    return (
        <div className="card bg-base-100 shadow-xl border-2">
            <figure className="px-8 pt-8">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-[#FF3811] text-xl font-bold'>Price: ${price}</p>
                    <button><FaArrowRight className='text-[#FF3811] text-xl font-bold'></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;
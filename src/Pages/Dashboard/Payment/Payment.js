import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

// load stripe
const stripePromise = loadStripe('pk_test_51Jw4UWBT0d2KYVcKbTaMAIMBKjmY0ROHrzOgFCk3At6B6wXcTjsJI50NRp4wl3qDI2vDr3YB8LoHDYNgBJc7QCBi00KOetbs39');

const Payment = () => {
	const { appointmentId } = useParams();
	const [appointment, setAppointment] = useState({});

	useEffect(() => {
		const url = `https://whispering-forest-63163.herokuapp.com/appointments/${appointmentId}`;
		axios
			.get(url)
			.then(res => {
				setAppointment(res.data);
			})
			.catch(err => console.log(err));
	}, [appointmentId]);

	return (
		<div>
			<h2>
				Please Pay for: {appointment?.patientName} for{' '}
				{appointment?.serviceName}
			</h2>
			<h4>Pay: ${appointment?.price}</h4>
			{appointment.price && (
				<Elements stripe={stripePromise}>
					<CheckoutForm appointment={appointment} />
				</Elements>
			)}
		</div>
	);
};

export default Payment;

/**
* Steps:
	1. install stripe and stripe-react
	2. set publishable key
	3. elements
	4. checkout form (customizable)
-------
	5. create payment method
	6. server create payment intent api
	7. load client secret
	8. confirm card payment
	9. handle user error
*/

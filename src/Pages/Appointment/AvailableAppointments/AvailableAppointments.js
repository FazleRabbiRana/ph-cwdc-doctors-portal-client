import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
	{
		id: 1,
		name: 'Teeth Orthodontics',
		time: '08.00 AM - 09.00 AM',
		space: 10,
	},
	{
		id: 2,
		name: 'Cosmetic Dentistry',
		time: '09.00 AM - 10.00 AM',
		space: 8,
	},
	{
		id: 3,
		name: 'Teeth Cleaning',
		time: '10.00 AM - 11.00 AM',
		space: 9,
	},
	{
		id: 4,
		name: 'Cavity Protection',
		time: '11.00 AM - 12.00 PM',
		space: 5,
	},
	{
		id: 5,
		name: 'Pediatric Dental',
		time: '06.00 PM - 07.00 PM',
		space: 10,
	},
	{
		id: 6,
		name: 'Oral Surgery',
		time: '07.00 PM - 08.00 PM',
		space: 10,
	},
];

const AvailableAppointments = ({ date }) => {
	const [bookingSuccess, setBookingSuccess] = useState(false);

	return (
		<Container>
			<Typography
				component="h2"
				variant="h4"
				sx={{ color: '#1CC7C1', fontWeight: 'bold', mb: 3 }}
			>
				Available Appointments on {date.toLocaleDateString()}
			</Typography>
			{bookingSuccess && (
				<Alert
					severity="success"
					sx={{ justifyContent: 'center', maxWidth: 'sm', mx: 'auto', mb: 3 }}
				>
					Appointment booked successfully!
				</Alert>
			)}

			<Grid container spacing={2}>
				{bookings.map(booking => (
					<Booking
						key={booking.id}
						booking={booking}
						date={date}
						setBookingSuccess={setBookingSuccess}
					/>
				))}
			</Grid>
		</Container>
	);
};

export default AvailableAppointments;
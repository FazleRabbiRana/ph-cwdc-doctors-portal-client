import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
	const { name, time, space } = booking;
	const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

	return (
		<>
			<Grid item xs={12} md={4}>
				<Paper elevation={3} sx={{ py: 5 }}>
					<Typography
						sx={{ color: '#1CC7C1' }}
						variant="h5"
						gutterBottom
						component="h4"
					>
						{name}
					</Typography>
					<Typography variant="h6" gutterBottom component="h6">
						{time}
					</Typography>
					<Typography variant="caption" display="block" gutterBottom>
						{space} SPACES AVAILABLE
					</Typography>
					<Button onClick={handleBookingOpen} variant="contained" sx={{backgroundColor: '#1CC7C1'}}>BOOK APPOINTMENT</Button>
				</Paper>
			</Grid>
			<BookingModal 
				bookingOpen={bookingOpen}
				handleBookingClose={handleBookingClose}
				booking={booking}
				date={date}
				setBookingSuccess={setBookingSuccess}
			/>
		</>
	);
};

export default Booking;

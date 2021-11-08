import {
	Box,
	Backdrop,
	Fade,
	Modal,
	Typography,
	TextField,
	Button,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const BookingModal = ({
	bookingOpen,
	handleBookingClose,
	booking,
	date,
	setBookingSuccess,
}) => {
	const { name, time } = booking;
	const { user } = useAuth();

	const initialBookingInfo = {
		patientName: user.displayName,
		email: user.email,
		phone: '',
	};
	const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

	// handle input value change on blur
	const handleOnBlur = e => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;
		const newInfo = { ...bookingInfo };
		newInfo[fieldName] = fieldValue;
		setBookingInfo(newInfo);
	};

	const handleBookingSubmit = e => {
		e.preventDefault();

		// collect data
		const appointment = {
			...bookingInfo,
			time,
			serviceName: name,
			date: date.toLocaleDateString(),
		};
		console.log(appointment);

		// send to the server
		axios
			.post(
				'https://whispering-forest-63163.herokuapp.com/appointments',
				appointment
			)
			.then(res => {
				console.log(res.data);
				if (res.data.insertedId) {
					setBookingSuccess(true);
					// close the modal/popup
					handleBookingClose();
				}
			});
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={bookingOpen}
			onClose={handleBookingClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={bookingOpen}>
				<Box sx={style}>
					<Typography
						id="transition-modal-title"
						variant="h6"
						component="h2"
						align="center"
						sx={{ color: '#1CC7C1' }}
					>
						{name}
					</Typography>
					<form onSubmit={handleBookingSubmit}>
						<TextField
							disabled
							sx={{ width: '90%', m: 1 }}
							defaultValue={time}
							size="small"
						/>
						<TextField
							sx={{ width: '90%', m: 1 }}
							name="patientName"
							onBlur={handleOnBlur}
							defaultValue={user.displayName}
							placeholder="Patient name"
							size="small"
						/>
						<TextField
							sx={{ width: '90%', m: 1 }}
							name="email"
							onBlur={handleOnBlur}
							defaultValue={user.email}
							placeholder="Email address"
							size="small"
						/>
						<TextField
							sx={{ width: '90%', m: 1 }}
							name="phone"
							onBlur={handleOnBlur}
							defaultValue=""
							placeholder="Phone number"
							size="small"
						/>
						<TextField
							disabled
							sx={{ width: '90%', m: 1 }}
							defaultValue={date.toLocaleDateString()}
							size="small"
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{ backgroundColor: '#1CC7C1', m: 1 }}
						>
							Submit
						</Button>
					</form>
				</Box>
			</Fade>
		</Modal>
	);
};

export default BookingModal;

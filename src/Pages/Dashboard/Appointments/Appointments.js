import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({ date }) => {
	const { user, token } = useAuth();
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		const url = `https://whispering-forest-63163.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
		fetch(url, {
			headers: {
				'authorization': `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAppointments(data);
			});
	}, [date, user.email, token]);

	return (
		<div>
			<Typography variant="h5">Appointments {appointments.length}</Typography>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Time</TableCell>
							<TableCell align="left">Service</TableCell>
							<TableCell align="left">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appointments.map(row => (
							<TableRow
								key={row._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row" align="left">
									{row.patientName}
								</TableCell>
								<TableCell align="left">{row.time}</TableCell>
								<TableCell align="left">{row.serviceName}</TableCell>
								<TableCell align="left">{row.phone}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Appointments;

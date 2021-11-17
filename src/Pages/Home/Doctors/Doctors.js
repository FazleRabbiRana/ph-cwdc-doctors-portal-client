import { Box, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		axios
			.get('https://whispering-forest-63163.herokuapp.com/doctors')
			.then(res => {
				// console.log(res.data);
				setDoctors(res.data);
			});
	}, []);

	return (
		<Box sx={{ py: 4 }}>
			<Container>
				<Typography
					sx={{ fontWeight: 700, m: 2, color: '#1CC7C1' }}
					variant="h6"
					component="div"
				>
					OUR DOCTORS ({doctors.length})
				</Typography>
				<Typography
					sx={{ fontWeight: 700, mb: 8 }}
					variant="h4"
					component="div"
				>
					Specialized Doctors
				</Typography>

				<Grid container spacing={2}>
					{doctors.map(doctor => (
						<Doctor key={doctor._id} doctor={doctor}></Doctor>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Doctors;

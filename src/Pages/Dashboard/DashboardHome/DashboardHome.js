import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
	const [date, setDate] = useState(new Date());

	return (
		<Box>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={6}>
							<Calendar date={date} setDate={setDate} />
						</Grid>
						<Grid item xs={6} sm={6}>
							<Appointments date={date} />
						</Grid>
					</Grid>
				</Box>
	);
};

export default DashboardHome;
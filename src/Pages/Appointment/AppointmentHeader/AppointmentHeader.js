import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';
import bg from '../../../images/bg.png';

const AppointmentHeader = ({ date, setDate }) => {
	const bannerBg = {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center'
	}

	return (
		<Box sx={{pb: 6, mb: 8}}>
			<Box style={{...bannerBg}}>
				<Container sx={{pt: 8}}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} align="left">
							<Typography variant='h3' component='h2' sx={{fontWeight: 'bold', mb: 3}}>
								Appointment
							</Typography>
							<Box sx={{display: 'inline-block', boxShadow: 1, borderRadius: 3, mb: {md: -6}}}>
								<Calendar date={date} setDate={setDate} />
							</Box>
						</Grid>
						<Grid item xs={12} md={6} textAlign={{xs: 'left', md: 'right'}} sx={{mt: {xs: 4, md: 0}, mb: {xs: 4, sm: 8, md: 0}}}>
							<img src={chair} alt="chair" style={{width: '90%'}} />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

export default AppointmentHeader;
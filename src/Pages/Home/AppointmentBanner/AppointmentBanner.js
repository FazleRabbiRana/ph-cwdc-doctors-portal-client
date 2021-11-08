import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
	backgroundImage: `url(${bg})`,
	backgroundColor: 'rgba(45, 58, 74, 0.85)',
	backgroundBlendMode: 'darken, luminosity',
	marginTop: '175px',
};

const AppointmentBanner = () => {
	return (
		<Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<img src={doctor} alt="Doctor" style={{ width: 400, marginTop: '-110px', maxWidth: '100%' }} />
				</Grid>
				<Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center'}} align='left'>
					<Box>
						<Typography
							sx={{ fontWeight: 700, mb: 2, color: '#1CC7C1' }}
							variant="h6"
						>
							APPOINTMENT
						</Typography>
						<Typography
							sx={{ fontWeight: 400, mb: 2, color: 'white' }}
							variant="h4"
						>
							Make an appointment Today
						</Typography>
						<Typography
							sx={{ color: 'white', fontSize: '16px', mb: 5 }}
							// variant="p"
						>
							Lorem ipsum dolor sit amet consescttur adipisicing elit. Sed culpa cumque enim! Volutatibus aliquid expedita saepe accusantium itaque ducumus rem voluptas laborum.
						</Typography>
						<Button variant='contained' sx={{backgroundColor: '#1CC7C1' }}>Learn More</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AppointmentBanner;

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
	{
		name: 'Fluoride Treatment',
		description:
			'Lorem ipsum dolor sit amet consescttur adipisicing elit. Sed culpa cumque enim! Volutatibus aliquid expedita saepe accusantium itaque ducumus rem voluptas',
		img: fluoride,
	},
	{
		name: 'Cavity Filling',
		description:
			'Lorem ipsum dolor sit amet consescttur adipisicing elit. Sed culpa cumque enim! Volutatibus aliquid expedita saepe accusantium itaque ducumus rem voluptas',
		img: cavity,
	},
	{
		name: 'Teeth Whitening',
		description:
			'Lorem ipsum dolor sit amet consescttur adipisicing elit. Sed culpa cumque enim! Volutatibus aliquid expedita saepe accusantium itaque ducumus rem voluptas',
		img: whitening,
	},
];

const Services = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Container>
				<Typography sx={{fontWeight: 700, m: 2, color: '#1CC7C1'}} variant="h6" component="div">
					OUR SERVICES
				</Typography>
				<Typography sx={{fontWeight: 700, mb: 8}} variant="h4" component="div">
					Services We Provide
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 12 }}
					sx={{justifyContent: 'center'}}
				>
					{services.map(service => (
						<Service key={service.name} service={service} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;

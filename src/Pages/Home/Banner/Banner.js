import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
	backgroundImage: `url(${bg})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center'
}

const verticalCenter = {
	display: 'flex',
	alignItems: 'center',
}

const Banner = () => {
	return (
		<Box sx={{mb: 8}} style={{...bannerBg, display: 'flex', minHeight: '70vh'}}>
			<Container sx={{flexGrow: 1, ...verticalCenter, py: { xs: 4, sm: 8 }}}>
				<Grid container spacing={{ xs: 4, sm: 3 }}>
					<Grid item xs={12} sm={6} sx={{textAlign: 'left'}}>
						<Box>
							<Typography variant='h3'>
								Your New Smile <br /> Starts Here
							</Typography>
							<Typography sx={{color: 'gray', my: 4, fontSize: '14px'}}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ad, cum reprehenderit voluptas nemo corrupti minus quae natus nobis recusandae!
							</Typography>
							<Button variant='contained' sx={{backgroundColor: '#1CC7C1' }}>Get Appointment</Button>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<img src={chair} alt="Chair" style={{width: '100%', height: 'auto', maxWidth: '100%'}} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Banner;
import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const bg = {
	backgroundImage: `url(${login})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '50%',
	backgroundPosition: 'calc(100% - 24px) bottom',
	minHeight: '100vh',
	// display: 'flex',
	// alignItems: 'center',
	// paddingBottom: '100px'
}

const Register = () => {
	const [registerData, setRegisterData] = useState({});
	const { user, registerUser, isLoading, authError } = useAuth();
	const history = useHistory();

	// handle input on change
	const handleOnBlur = e => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;
		const newRegisterData = { ...registerData };
		newRegisterData[fieldName] = fieldValue;
		setRegisterData(newRegisterData);

		console.log(fieldName, fieldValue);
	};

	// handle register submit
	const handleRegisterSubmit = e => {
		e.preventDefault();

		// match password
		if (registerData?.password !== registerData?.password2) {
			alert('Your password did not match');
			return;
		}

		registerUser(registerData?.email, registerData?.password, registerData?.name, history);
	};

	return (
		<Box style={bg}>
			<Container>
				<Grid container>
					<Grid item sx={{ mt: 8, py: 4, px: 2 }} xs={12} sm={8} md={6} bgcolor="rgba(255, 255, 255, 0.7)">
						<Typography variant="body1" gutterBottom>
							Register
						</Typography>
						{!isLoading && (
							<form onSubmit={handleRegisterSubmit}>
								<TextField
									sx={{ width: '75%', m: 1 }}
									label="Your Name"
									name="name"
									type="text"
									onBlur={handleOnBlur}
									variant="standard"
								/>
								<TextField
									sx={{ width: '75%', m: 1 }}
									label="Your Email"
									name="email"
									type="email"
									onBlur={handleOnBlur}
									variant="standard"
								/>
								<TextField
									sx={{ width: '75%', m: 1 }}
									label="Your Password"
									type="password"
									name="password"
									onBlur={handleOnBlur}
									variant="standard"
								/>
								<TextField
									sx={{ width: '75%', m: 1 }}
									label="Re-type Your Password"
									type="password"
									name="password2"
									onBlur={handleOnBlur}
									variant="standard"
								/>
	
								<Button
									sx={{ width: '75%', m: 1 }}
									type="submit"
									variant="contained"
								>
									Register
								</Button>
								<NavLink style={{ textDecoration: 'none' }} to="/login">
									<Button variant="text">Already Registered? Please Login</Button>
								</NavLink>
							</form>
						)}
						{isLoading && <CircularProgress />}
						{user?.email && (
							<Alert severity="success">User Created successfully!</Alert>
						)}
						{authError && <Alert severity="error">{authError}</Alert>}
					</Grid>
					{/* <Grid item xs={12} md={6}>
						<img style={{ width: '100%' }} src={login} alt="" />
					</Grid> */}
				</Grid>
			</Container>
		</Box>
	);
};

export default Register;

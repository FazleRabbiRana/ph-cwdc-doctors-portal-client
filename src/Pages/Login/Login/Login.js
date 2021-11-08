import { Alert, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
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

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

	const location = useLocation();
	const history = useHistory();

	// handle input on change
	const handleOnChange = e => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;
		// console.log(fieldName, fieldValue);

		const newLoginData = {...loginData};
		newLoginData[fieldName] = fieldValue;
		setLoginData(newLoginData);
		console.log(loginData)
	}

	// handle login submit
	const handleLoginSubmit = e => {
		e.preventDefault();

		loginUser(loginData?.email, loginData?.password, location, history);
	}

	// handle google sign in
	const handleGoogleSignIn = () => {
		signInWithGoogle(location, history);
	}

	return (
		<Box style={bg}>
			<Container>
				<Grid container>
					<Grid item sx={{ mt: 8, py: 4 }} xs={12} sm={8} md={6} bgcolor="rgba(255, 255, 255, 0.7)">
						<Typography variant="body1" gutterBottom>
							Login
						</Typography>
						<form onSubmit={handleLoginSubmit}>
							<TextField
								sx={{ width: '75%', m: 1 }}
								label="Your Email"
								name="email"
								onBlur={handleOnChange}
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								label="Your Password"
								type="password"
								name="password"
								onBlur={handleOnChange}
								variant="standard"
							/>
	
							<Button
								sx={{ width: '75%', m: 1 }}
								type="submit"
								variant="contained"
							>
								Login
							</Button>
							<NavLink style={{ textDecoration: 'none' }} to="/register">
								<Button variant="text">New User? Please Register</Button>
							</NavLink>
							{isLoading && <CircularProgress />}
							{user?.email && (
								<Alert severity="success">Log in successful!</Alert>
							)}
							{authError && <Alert severity="error">{authError}</Alert>}
						</form>
						<p>-------------------------</p>
						<Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
					</Grid>
					{/* <Grid item xs={12} md={6}>
						<img style={{ width: '100%' }} src={login} alt="" />
					</Grid> */}
				</Grid>
			</Container>
		</Box>
	);
};

export default Login;

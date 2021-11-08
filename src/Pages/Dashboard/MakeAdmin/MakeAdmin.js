import { Alert, Box, Button, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
// import axios from 'axios';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const { token } = useAuth();

	const handleOnBlur = e => {
		setEmail(e.target.value);
	};

	const handleAdminSubmit = e => {
		e.preventDefault();

		const user = { email };
		fetch('https://whispering-forest-63163.herokuapp.com/users/admin', {
			method: 'PUT',
			headers: {
				'authorization': `Bearer ${token}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount) {
					setSuccess(true);
					e.target.reset();
				}
			})
			.catch(error => {
				console.log(error);
			});

		// axios.put({
		// 	url: 'https://whispering-forest-63163.herokuapp.com/users/admin',
		// 	method: 'put',
		// 	headers: {
		// 		'authorization': `Bearer ${token}`
		// 	},
		// 	data: user
		// })
		// 	.then(res => {
		// 	console.log(res.data);
		// 	if (res.data.modifiedCount) {
		// 		setSuccess(true);
		// 		e.target.reset();
		// 	}
		// });
	};

	return (
		<Box>
			<Typography variant="h5">Make an Admin</Typography>
			<form onSubmit={handleAdminSubmit}>
				<TextField
					sx={{ width: '50%' }}
					label="Email"
					type="email"
					onBlur={handleOnBlur}
					variant="standard"
				/>
				<Button type="submit" variant="contained">
					Make Admin
				</Button>
			</form>
			{success && <Alert severity="success">Made Admin successfully!</Alert>}
		</Box>
	);
};

export default MakeAdmin;

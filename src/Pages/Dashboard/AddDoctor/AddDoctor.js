import { Button, Input, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

const AddDoctor = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [image, setImage] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		if (!image) {
			return;
		}

		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('image', image);

		axios
			.post('https://whispering-forest-63163.herokuapp.com/doctors', formData)
			.then(res => {
				// console.log(res.data);
				if (res.data.insertedId) {
					console.log('doctor added successfully');
					setSuccess('Doctor added successfully');
					e.target.reset();
				}
			})
			.catch(err => console.log(err));
	};
	return (
		<div>
			<Typography variant="h4">Add a Doctor</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					sx={{ width: '50%' }}
					label="Name"
					required
					onChange={e => setName(e.target.value)}
					variant="standard"
				/>
				<br />
				<TextField
					sx={{ width: '50%' }}
					label="Email"
					type="email"
					required
					onChange={e => setEmail(e.target.value)}
					variant="standard"
				/>
				<br />
				<Input
					accept="image/*"
					type="file"
					onChange={e => setImage(e.target.files[0])}
				/>
				<br />
				<Button variant="contained" type="submit">
					Add Doctor
				</Button>
			</form>
			{success && <p style={{ color: 'green' }}>{success}</p>}
		</div>
	);
};

export default AddDoctor;
